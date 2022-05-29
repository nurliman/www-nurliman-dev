use lazy_static::lazy_static;
use worker::{Cors, Method};

lazy_static! {
    pub static ref CORS_PROD: Cors = Cors::new()
        .with_credentials(true)
        .with_origins(vec!["https://nurliman.dev"])
        .with_allowed_headers(vec!["Content-Type"])
        .with_methods(Method::all());
    pub static ref CORS_DEV: Cors = Cors::new()
        .with_credentials(true)
        .with_origins(vec![
            "http://localhost:3000",
            "https://www-nurliman-dev-nurliman.vercel.app",
            "https://www-nurliman-dev-git-releases-main-nurliman.vercel.app"
        ])
        .with_allowed_headers(vec!["Content-Type"])
        .with_methods(Method::all());
}

pub enum DefaultCors {
    Prod,
    Dev,
}

impl DefaultCors {
    pub fn to_cors(&self) -> &Cors {
        match self {
            DefaultCors::Prod => &*CORS_PROD,
            DefaultCors::Dev => &*CORS_DEV,
        }
    }
}
