use serde_json::json;
use worker::{console_log, Date, Env, Request, Response, Result, Router};

mod handlers;
mod sendgrid_client;
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

#[worker::event(fetch)]
pub async fn main(req: Request, env: Env, _ctx: worker::Context) -> Result<Response> {
    log_request(&req);

    utils::set_panic_hook();

    let router = Router::new();

    router
        .get("/", |_, _| {
            Response::from_json(&json!({
             "name": "message-sender",
             "version": "0.1.0",
             "status": "online",
            }))
        })
        .post_async("/v0/send", handlers::v0::send::send_message)
        .get("/worker-version", |_, ctx| {
            let version = ctx.var("WORKERS_RS_VERSION")?.to_string();
            Response::ok(version)
        })
        .run(req, env)
        .await
}
