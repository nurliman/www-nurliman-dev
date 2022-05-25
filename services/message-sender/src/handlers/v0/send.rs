use serde::Deserialize;
use serde_json::json;
use validator::Validate;
use worker::{console_log, Request, Response, Result, RouteContext};

#[derive(Deserialize, Validate)]
struct RequestBody {
    #[validate(email)]
    email: String,
    #[validate(length(min = 3))]
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
        }));

        // send error response
        return Ok(res?.with_status(500));
    }

    // parse request body
    let req_body: RequestBody = match req.json::<RequestBody>().await {
        Ok(res) => res,
        Err(error) => {
            let res = Response::from_json(&json!({
                "error": error.to_string(),
                "message": "Failed to parse request to JSON",
                "path": req.path(),
            }));

            return Ok(res?.with_status(400));
        }
    };

    // validate request body
    if let Err(error) = req_body.validate() {
        let res = Response::from_json(&json!({
            "error": error.to_string(),
            "message": "Failed to validate request",
            "path": req.path(),
        }));

        return Ok(res?.with_status(400));
    }

    Response::from_json(&json!({ "name": "send", "version": "0.1.0" }))
}
