import React, { ComponentProps, useCallback, useEffect } from "react";
import clsx from "clsx";
import { useForm, SubmitHandler } from "libs/react-hook-form";
import InputComponent from "./InputComponent";
import Captcha from "components/Captcha";
import styles from "./ContactForm.module.scss";

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
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = useCallback((data) => console.log(data), []);

  const onVerifyCaptcha = useCallback((token: string) => {
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
        type="submit"
        className={clsx("button", "btn-send", styles.spanRow)}
        value="Send message"
      />
    </form>
  );
};

export default ContactForm;
