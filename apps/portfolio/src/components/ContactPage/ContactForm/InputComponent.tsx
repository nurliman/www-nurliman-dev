import React, { ComponentProps } from "react";
import clsx from "clsx";
import { Controller, ControllerProps, Path, FieldValues } from "libs/react-hook-form";
import styles from "./ContactForm.module.scss";

type InputElementTag = "input" | "textarea";
type Props<T extends InputElementTag> = {
  className?: string;
  label?: React.ReactNode;
  inputElement?: T;
  inputProps?: ComponentProps<T>;
};

function InputComponent<
  TInputElementTag extends InputElementTag = "input",
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>({
  className,
  inputElement,
  inputProps,
  label,
  ...restProps
}: Omit<ControllerProps<TFieldValues, TName>, "render"> & Props<TInputElementTag>) {
  inputElement = inputElement ?? ("input" as any);
  inputProps = inputProps ?? ({} as any);

  return (
    <Controller
      {...restProps}
      render={({ field, fieldState: { error } }) => (
        <div
          className={clsx("form-group", "form-group-with-icon", styles.field, className, {
            "has-error": error,
            "has-danger": error,
          })}
        >
          {React.createElement(inputElement, {
            type: "text",
            ...inputProps,
            ...field,
            className: clsx("form-control", inputProps.className),
          })}
          {label && <label>{label}</label>}
          <div className="form-control-border"></div>
          <div className="help-block with-errors">{error?.message}</div>
        </div>
      )}
    />
  );
}

export default InputComponent;
