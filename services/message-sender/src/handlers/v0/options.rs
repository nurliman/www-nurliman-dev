use crate::cors::DefaultCors;
use worker::{Request, Response, Result, RouteContext};

pub fn options(_: Request, ctx: RouteContext<()>) -> Result<Response> {
    let cors = match ctx.var("ENVIRONMENT")?.to_string().as_str() {
        "production" => DefaultCors::Prod.to_cors(),
        _ => DefaultCors::Dev.to_cors(),
    };

    Response::empty()?.with_cors(&cors)
}
