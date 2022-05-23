use serde_json::json;
use worker::{console_log, Request, Response, Result, RouteContext};

pub fn send_message(req: Request, ctx: RouteContext<()>) -> Result<Response> {
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
    Response::from_json(&json!({ "name": "send", "version": "0.1.0" }))
}
