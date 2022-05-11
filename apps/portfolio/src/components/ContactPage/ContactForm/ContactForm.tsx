import React, { ComponentProps, useCallback } from "react";
import clsx from "clsx";
import { useForm, SubmitHandler } from "libs/react-hook-form";
import InputComponent from "./InputComponent";
import styles from "./ContactForm.module.scss";

type Props = ComponentProps<"form">;

type Inputs = {
  name: string;
  email: string;
  subject?: string;
  message?: string;
};

const ContactForm: React.FC<Props> = ({ className }) => {
  const { control, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = useCallback((data) => console.log(data), []);

  return (
    <form className={clsx(styles.container, className)} onSubmit={handleSubmit(onSubmit)}>
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

      <div
        className={clsx("g-recaptcha", styles.spanRow)}
        data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"
        data-theme="dark"
      ></div>

      <input
        type="submit"
        className={clsx("button", "btn-send", styles.spanRow)}
        value="Send message"
      />
    </form>
  );
};

export default ContactForm;
