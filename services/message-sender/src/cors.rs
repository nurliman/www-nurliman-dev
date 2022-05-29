use lazy_static::lazy_static;
use worker::{Cors, Method};

lazy_static! {
    pub static ref DEFAULT_CORS: Cors = Cors::new()
        .with_credentials(true)
        .with_origins(vec!["http://localhost:3000", "https://nurliman.dev"])
        .with_allowed_headers(vec!["Content-Type"])
        .with_methods(Method::all());
}
