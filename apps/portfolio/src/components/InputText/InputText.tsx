import React, { ReactNode, ComponentProps, useCallback, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import useBoundingclientrect from "@rooks/use-boundingclientrect";
import styles from "./InputText.module.scss";

export type InputTextElementTag = "input" | "textarea";

export type InputTextProps<T extends InputTextElementTag> = ComponentProps<T> & {
  inputElement?: T;
  label?: ReactNode;
  labelClassName?: string;
  containerClassName?: string;
  dark?: boolean;
  errorMessage?: string;
};

const defaultProps = {
  dark: true,
  inputElement: "input",
};

function InputText<T extends InputTextElementTag>({
  dark,
  inputElement,
  containerClassName,
  labelClassName,
  label,
  errorMessage,
  placeholder,
  onFocus,
  onBlur,
  ...restProps
}: InputTextProps<T>) {
  const containerRef = useRef<HTMLDivElement>();
  const inputRef = useRef<HTMLElementTagNameMap[T]>();
  const labelRef = useRef<HTMLLabelElement>();
  const labelSize = useBoundingclientrect(labelRef);
  const [focused, setFocused] = useState(false);

  const focusField = useCallback(() => {
    if (typeof inputRef?.current?.focus === "function") {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const onFocusHandler = useCallback((e) => {
    setFocused(true);
    typeof onFocus === "function" && onFocus(e);
  }, []);

  const onBlurHandler = useCallback((e) => {
    setFocused(false);
    typeof onBlur === "function" && onBlur(e);
  }, []);

  const placeholderLabel = useMemo(() => {
    if (label) return focused ? placeholder : null;
    return placeholder;
  }, [label, focused, placeholder]);

  return (
    <div
      className={clsx(styles.outlineInput, containerClassName, dark && styles.dark)}
      ref={containerRef}
    >
      <div
        className={clsx({
          [styles.fieldWrapper]: true,
          [styles.withFloatingLabel]: label,
          [styles.withInvalid]: errorMessage,
          ["_has-value"]: inputRef.current?.value,
          ["_focused"]: focused,
        })}
        onClick={focusField}
      >
        {label ? (
          <label className={clsx(styles.floatingLabel, labelClassName)}>{label}</label>
        ) : null}
        {label ? (
          <label
            ref={labelRef}
            className={clsx(styles.floatingLabel, styles.referenceLabel, labelClassName)}
            style={{
              opacity: 0,
              pointerEvents: "none",
              visibility: "hidden",
              zIndex: -9999999999,
            }}
          >
            {label}
          </label>
        ) : null}
        {React.createElement(inputElement, {
          ref: inputRef,
          placeholder: placeholderLabel,
          ...restProps,
          onFocus: onFocusHandler,
          onBlur: onBlurHandler,
        })}
        <div className={styles.borders}>
          <div className={clsx(styles.border, styles.leftBorder)} />
          <div className={styles.middleBorders}>
            <div className={styles.topBorders}>
              <div className={clsx(styles.border, "start")} />
              <div className={clsx(styles.border, "end")} />
            </div>
            <div className={clsx(styles.border, styles.bottomBorder)} />
          </div>
          <div className={clsx(styles.border, styles.rightBorder)} />
        </div>
        <style jsx>{`
          .${styles.floatingLabel} {
            top: ${inputElement === "textarea" ? "16px" : "unset"};
          }

          .start {
            width: calc(${labelSize?.width || 0} / 2);
          }

          .end {
            width: 100%;
          }

          ._has-value .start {
            width: 0;
          }

          ._focused .start {
            width: 0;
          }

          ._has-value .end {
            width: calc(100% - ${labelSize?.width || 0}px - 8px);
          }

          ._focused .end {
            width: calc(100% - ${labelSize?.width || 0}px - 8px);
          }
        `}</style>
      </div>
      {errorMessage ? (
        <div className={styles.hints}>
          <div className="messages">
            <div className="error">{errorMessage}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

InputText.defaultProps = defaultProps;

export default InputText;
