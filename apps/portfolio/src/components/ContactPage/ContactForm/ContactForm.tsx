import React, { ComponentProps, useCallback, useEffect } from "react";
import clsx from "clsx";
import { useForm, SubmitHandler } from "libs/react-hook-form";
import { toast } from "react-toastify";
import InputComponent from "./InputComponent";
import Captcha from "components/Captcha";
import Spinner from "components/Spinner";
import styles from "./ContactForm.module.scss";

const MESSAGE_SENDER_SERVICE_HOST = process.env.NEXT_PUBLIC_MESSAGE_SENDER_SERVICE_HOST;
const EMAIL_REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const ERROR_MESSAGE = "An error occurred while sending message.";

type Props = ComponentProps<"form">;

type Inputs = {
  name: string;
  email: string;
  subject?: string;
  message?: string;
  captchaToken: string;
};

const ContactForm: React.FC<Props> = ({ className }) => {
  const {
    control,
    register,
    setValue,
    resetField,
    clearErrors,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = useCallback(async (data, e) => {
    try {
      const url = MESSAGE_SENDER_SERVICE_HOST + "/v0/send";
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const resJson = await res.json();
        toast.error(resJson?.message || ERROR_MESSAGE);
        return;
      }

      toast("Message sent!");

      if (typeof e?.target?.reset === "function") {
        e.target.reset();
      }

      reset();
    } catch (error) {
      toast.error(error?.message || ERROR_MESSAGE);
    }
  }, []);

  const onVerifyCaptcha = useCallback((token: string) => {
    clearErrors("captchaToken");
    setValue("captchaToken", token);
  }, []);

  const clearCaptchaToken = useCallback(() => {
    resetField("captchaToken");
  }, []);

  useEffect(() => {
    register("captchaToken", { required: "Please verify that you are not a robot." });
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={clsx(styles.container, className)}>
      <InputComponent
        control={control}
        name="name"
        label="Full Name"
        rules={{
          required: "Name is required.",
          minLength: {
            value: 2,
            message: "The name must have at least 2 characters.",
          },
        }}
      />
      <InputComponent
        control={control}
        name="email"
        label="Email Address"
        inputProps={{ type: "email" }}
        rules={{
          required: "Valid email is required.",
          pattern: {
            value: EMAIL_REGEXP,
            message: "Invalid email address",
          },
        }}
      />
      <InputComponent
        control={control}
        name="subject"
        label="Subject"
        rules={{
          required: "Subject is required.",
          minLength: {
            value: 4,
            message: "The subject must have at least 4 characters.",
          },
        }}
      />
      <InputComponent
        control={control}
        name="message"
        label="Message"
        className={styles.msgBox}
        inputElement="textarea"
        inputProps={{ rows: 7 }}
        rules={{
          required: "Please, leave me a message.",
          minLength: {
            value: 4,
            message: "The message must have at least 4 characters.",
          },
        }}
      />
      <Captcha
        containerClassName={styles.spanRow}
        verifyCallback={onVerifyCaptcha}
        onExpire={clearCaptchaToken}
        errorMessage={errors?.captchaToken?.message}
      />
      <button
        disabled={isSubmitting}
        type="submit"
        className={clsx("button", "btn-send", styles.submitButton, styles.spanRow)}
      >
        {isSubmitting ? <Spinner containerClassName={styles.spinner} theme="light" /> : null}
        <span>Send message</span>
      </button>
    </form>
  );
};

export default ContactForm;
