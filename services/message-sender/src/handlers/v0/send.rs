use crate::cors::DEFAULT_CORS;
use crate::sendgrid_client::{EmailRecipientSender, SendgridClient};
use serde::Deserialize;
use serde_json::json;
use validator::Validate;
use worker::{console_log, Request, Response, Result, RouteContext};

#[derive(Deserialize, Validate)]
struct RequestBody {
    #[validate(email)]
    email: String,
    #[validate(length(min = 2))]
    name: String,
    #[validate(length(min = 4))]
    subject: String,
    #[validate(length(min = 4))]
    message: String,
}

pub async fn send_message(mut req: Request, ctx: RouteContext<()>) -> Result<Response> {
    let sendgrid_api_key = match ctx.secret("SENDGRID_API_KEY") {
        Ok(value) => value.to_string(),
        Err(_) => String::new(),
    };

    // check SENDGRID_API_KEY
    if sendgrid_api_key.is_empty() {
        console_log!("Error: Please provide env.SENDGRID_API_KEY");

        // init error response body
        let res = Response::from_json(&json!({
            "error": "Internal Server Error",
            "message": "Some environment variables is not provided.",
            "path": req.path(),
        }))?
        .with_cors(&DEFAULT_CORS)?
        .with_status(500);

        // send error response
        return Ok(res);
    }

    let mail_sender_email = match ctx.secret("MAIL_SENDER_EMAIL") {
        Ok(value) => value.to_string(),
        Err(_) => String::new(),
    };

    // check SENDGRID_API_KEY
    if mail_sender_email.is_empty() {
        console_log!("Error: Please provide env.MAIL_SENDER_EMAIL");

        // init error response body
        let res = Response::from_json(&json!({
            "error": "Internal Server Error",
            "message": "Some environment variables is not provided.",
            "path": req.path(),
        }))?
        .with_cors(&DEFAULT_CORS)?
        .with_status(500);

        // send error response
        return Ok(res);
    }

    // parse request body
    let req_body: RequestBody = match req.json::<RequestBody>().await {
        Ok(res) => res,
        Err(error) => {
            let res = Response::from_json(&json!({
                "error": error.to_string(),
                "message": "Failed to parse request to JSON",
                "path": req.path(),
            }))?
            .with_cors(&DEFAULT_CORS)?
            .with_status(400);

            return Ok(res);
        }
    };

    // validate request body
    if let Err(error) = req_body.validate() {
        let res = Response::from_json(&json!({
            "error": error.to_string(),
            "message": "Failed to validate request",
            "path": req.path(),
        }))?
        .with_cors(&DEFAULT_CORS)?
        .with_status(400);

        return Ok(res);
    }

    let sendgrid_client = SendgridClient::new(&sendgrid_api_key);

    // send email
    let sendgrid_res = sendgrid_client
        .send_email(
            EmailRecipientSender {
                // to
                email: ctx.var("MESSAGE_RECIPIENT_EMAIL")?.to_string(),
                name: ctx.var("MESSAGE_RECIPIENT_NAME")?.to_string(),
            },
            EmailRecipientSender {
                // from
                email: mail_sender_email,
                name: "Message Sender Service".to_string(),
            },
            EmailRecipientSender {
                // reply to
                email: req_body.email,
                name: req_body.name,
            },
            &req_body.subject, // subject
            &req_body.message, // message
        )
        .await;

    if let Err(error) = sendgrid_res {
        let res = Response::from_json(&json!({
            "error": error.to_string(),
            "message": "Error while sending email",
            "path": req.path(),
        }))?
        .with_cors(&DEFAULT_CORS)?
        .with_status(500);

        return Ok(res);
    }

    Response::from_json(&json!({ "message": "Message sent!" }))?.with_cors(&DEFAULT_CORS)
}
