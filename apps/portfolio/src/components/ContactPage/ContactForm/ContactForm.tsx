import React, { ComponentProps, useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import { useForm, SubmitHandler } from "libs/react-hook-form";
import InputComponent from "./InputComponent";
import Captcha from "components/Captcha";
import styles from "./ContactForm.module.scss";

const MESSAGE_SENDER_SERVICE_HOST = process.env.NEXT_PUBLIC_MESSAGE_SENDER_SERVICE_HOST;

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
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = useCallback((data) => {
    const url = MESSAGE_SENDER_SERVICE_HOST + "/v0/send";
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
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
        rules={{ required: "Name is required." }}
      />
      <InputComponent
        control={control}
        name="email"
        label="Email Address"
        inputProps={{ type: "email" }}
        rules={{ required: "Valid email is required." }}
      />
      <InputComponent
        control={control}
        name="subject"
        label="Subject"
        rules={{ required: "Subject is required." }}
      />
      <InputComponent
        control={control}
        name="message"
        label="Message"
        className={styles.msgBox}
        inputElement="textarea"
        inputProps={{ rows: 7 }}
        rules={{ required: "Please, leave me a message." }}
      />
      <Captcha
        containerClassName={styles.spanRow}
        verifyCallback={onVerifyCaptcha}
        onExpire={clearCaptchaToken}
        errorMessage={errors?.captchaToken?.message}
      />
      <input
        disabled={isSubmitting}
        type="submit"
        className={clsx("button", "btn-send", styles.spanRow)}
        value="Send message"
      />
    </form>
  );
};

export default ContactForm;
