use serde_json::json;
use worker::*;

mod utils;

fn log_request(req: &Request) {
    console_log!(
        "{} - [{}], located at: {:?}, within: {}",
        Date::now().to_string(),
        req.path(),
        req.cf().coordinates().unwrap_or_default(),
        req.cf().region().unwrap_or("unknown region".into())
    );
}

#[event(fetch)]
pub async fn main(req: Request, env: Env, _ctx: worker::Context) -> Result<Response> {
    log_request(&req);

    utils::set_panic_hook();

    let router = Router::new();

    router
        .get("/", |_, _| {
            Response::from_json(&json!({
             "name": "message-sender",
             "version": "0.0.1",
             "status": "online",
            }))
        })
        .get("/v0/send", |_, ctx| {
            let sg_api_key = match ctx.secret("SENDGRID_API_KEY") {
                Ok(value) => value.to_string(),
                Err(_) => String::new(),
            };

            console_log!("Error: Please provide env.SENDGRID_API_KEY");

            if sg_api_key.is_empty() {
                return Response::error("Some environment variables is not provided.", 500);
            }
            Response::from_json(&json!({ "name": "send", "version": "0.0.1" }))
        })
        .get("/worker-version", |_, ctx| {
            let version = ctx.var("WORKERS_RS_VERSION")?.to_string();
            Response::ok(version)
        })
        .run(req, env)
        .await
}
