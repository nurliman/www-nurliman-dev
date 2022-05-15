import React, { ComponentProps, useCallback, useEffect, useRef } from "react";
import Script from "next/script";
import clsx from "clsx";
import styles from "./Captcha.module.scss";

const KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

type Props = ComponentProps<"div"> & {
  verifyCallback?: (token: string) => any;
  onError?: () => any;
  onExpire?: () => any;
  containerClassName?: string;
  errorMessage?: string;
};

const Captcha: React.FC<Props> = ({
  className,
  containerClassName,
  verifyCallback,
  onError,
  onExpire,
  errorMessage,
  ...restProps
}) => {
  const ref = useRef<HTMLDivElement>();

  const recaptchaOnLoadCallback = useCallback(() => {
    grecaptcha.enterprise.render(ref.current, {
      sitekey: KEY,
      theme: "dark",
      callback: console.log,
      "expired-callback": onExpire,
      "error-callback": onError,
    });
  }, []);

  useEffect(() => {
    (window as any).recaptchaOnLoadCallback = recaptchaOnLoadCallback;
  }, []);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.google.com/recaptcha/enterprise.js?onload=recaptchaOnLoadCallback&render=explicit"
      />
      <div
        className={clsx({
          [styles.container]: true,
          [styles.containerError]: errorMessage,
          [containerClassName]: containerClassName,
        })}
      >
        <div {...restProps} className={clsx(styles.captcha, className)} ref={ref} />
        {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
      </div>
    </>
  );
};

export default Captcha;
