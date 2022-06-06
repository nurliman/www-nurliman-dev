package root

import (
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	payload := `{"name":"message-sender","version":"0.3.0","status":"online"}`

	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(payload))
}
