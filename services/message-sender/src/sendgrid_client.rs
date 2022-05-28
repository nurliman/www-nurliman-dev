use reqwest::header::{HeaderMap, HeaderValue, AUTHORIZATION};
use serde::Serialize;

#[derive(Serialize)]
pub struct EmailRecipientSender {
    pub email: String,
    pub name: String,
}

#[derive(Serialize)]
struct EmailPersonalization {
    to: Vec<EmailRecipientSender>,
    subject: String,
}

#[derive(Serialize)]
struct EmailContent {
    r#type: String,
    value: String,
}

#[derive(Serialize)]
struct SendGridEmail {
    personalizations: Vec<EmailPersonalization>,
    content: Vec<EmailContent>,
    from: EmailRecipientSender,
    reply_to: EmailRecipientSender,
}

pub struct SendgridClient {
    api_key: String,
    base_url: String,
}

impl SendgridClient {
    pub fn new(api_key: &str) -> SendgridClient {
        SendgridClient {
            api_key: api_key.into(),
            base_url: "https://api.sendgrid.com/v3/mail/send".to_string(),
        }
    }

    pub async fn send_email(
        &self,
        to: EmailRecipientSender,
        from: EmailRecipientSender,
        reply_to: EmailRecipientSender,
        subject: &str,
        message: &str,
    ) -> Result<reqwest::Response, reqwest::Error> {
        let client = reqwest::Client::new();
        let mut headers = HeaderMap::new();
        let authorisation_header_value = format!("Bearer {}", self.api_key);
        headers.insert(
            AUTHORIZATION,
            HeaderValue::from_str(&authorisation_header_value).unwrap(),
        );
        let data: SendGridEmail = SendGridEmail {
            personalizations: vec![EmailPersonalization {
                to: vec![to],
                subject: subject.to_string(),
            }],
            content: vec![EmailContent {
                r#type: "text/plain".to_string(),
                value: message.to_string(),
            }],
            from,
            reply_to,
        };

        return client
            .post(&self.base_url)
            .headers(headers)
            .json(&data)
            .send()
            .await;
    }
}
