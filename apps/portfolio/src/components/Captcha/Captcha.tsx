import React, { ComponentProps, useCallback, useEffect, useRef, useState } from "react";
import Script from "next/script";
import clsx from "clsx";
import styles from "./Captcha.module.scss";

const KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

declare global {
  interface Window {
    recaptchaOnLoadCallback?: () => any;
  }
}

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
  const [recaptchaId, setRecaptchaId] = useState<number>();
  const [isLoading, setIsLoading] = useState(true);

  const recaptchaOnLoadCallback = useCallback(() => {
    if (typeof window.grecaptcha?.enterprise?.render !== "function") return;
    if (typeof recaptchaId === "number") return;

    setIsLoading(true);

    try {
      const newRecaptchaId = grecaptcha.enterprise.render(ref.current, {
        sitekey: KEY,
        theme: "dark",
        callback: verifyCallback,
        "expired-callback": onExpire,
        "error-callback": onError,
      });

      setRecaptchaId(newRecaptchaId);
    } catch (error) {
      console.warn(error);
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [ref.current]);

  useEffect(() => {
    if (!window.recaptchaOnLoadCallback) {
      window.recaptchaOnLoadCallback = recaptchaOnLoadCallback;
    }

    if (window.grecaptcha) {
      recaptchaOnLoadCallback();
    }

    return () => {
      setRecaptchaId(null);
      if (typeof window.grecaptcha?.enterprise?.reset === "function") {
        grecaptcha.enterprise.reset();
      }
    };
  }, [recaptchaOnLoadCallback]);

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
        <div
          {...restProps}
          ref={ref}
          className={clsx({
            [styles.captcha]: true,
            ["shimmer"]: isLoading,
            [className]: className,
          })}
        />
        {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
      </div>
    </>
  );
};

export default Captcha;
