package sendv0

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/go-playground/validator/v10"
	"github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
)

type RequestBody struct {
	Email   string `validate:"required,email"`
	Name    string `validate:"required,min=2"`
	Subject string `validate:"required,min=4"`
	Message string `validate:"required,min=4"`
}

var Validator = validator.New()

func Handler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		w.WriteHeader(404)
		w.Write([]byte("Not Found!"))
		return
	}

	sgApiKey := os.Getenv("SENDGRID_API_KEY")

	if sgApiKey == "" {
		log.Panicln("Error: Please provide env.SENDGRID_API_KEY")

		payload := map[string]string{
			"error":   "Internal Server Error",
			"message": "Some environment variables is not provided.",
		}

		payloadJson, _ := json.Marshal(payload)

		w.WriteHeader(500)
		w.Header().Set("Content-Type", "application/json")
		w.Write(payloadJson)
		return
	}

	body := new(RequestBody)
	err := json.NewDecoder(r.Body).Decode(&body)

	if err != nil {
		log.Panicln(err)

		payload := map[string]string{
			"error":   err.Error(),
			"message": "Failed to parse request to JSON",
		}

		payloadJson, _ := json.Marshal(payload)

		w.WriteHeader(400)
		w.Header().Set("Content-Type", "application/json")
		w.Write(payloadJson)
		return
	}

	err = Validator.Struct(body)

	if err != nil {
		log.Panicln(err)

		payload := map[string]string{
			"error":   err.Error(),
			"message": "Failed to validate request",
		}

		payloadJson, _ := json.Marshal(payload)

		w.WriteHeader(400)
		w.Header().Set("Content-Type", "application/json")
		w.Write(payloadJson)
		return
	}

	from := mail.NewEmail(body.Name, "test@example.com")
	to := mail.NewEmail("Nurliman Diara Aria", "nurlimandiara@gmail.com")
	replyTo := mail.NewEmail(body.Name, body.Email)
	htmlContent := fmt.Sprintf("<p>%s</p>", body.Message)
	message := mail.NewSingleEmail(from, body.Subject, to, body.Message, htmlContent).SetReplyTo(replyTo)
	client := sendgrid.NewSendClient(sgApiKey)
	response, err := client.Send(message)

	if err != nil {
		log.Panicln(err)

		payload := map[string]string{
			"error":   err.Error(),
			"message": "Error while sending email",
		}

		payloadJson, _ := json.Marshal(payload)

		w.WriteHeader(500)
		w.Header().Set("Content-Type", "application/json")
		w.Write(payloadJson)
		return
	}

	w.WriteHeader(response.StatusCode)
	w.Write([]byte(response.Body))
}
