import React, { ComponentProps } from "react";
import clsx from "clsx";
import { Controller, ControllerProps, Path, FieldValues } from "libs/react-hook-form";
import InputText, { InputTextElementTag } from "components/InputText";
import styles from "./ContactForm.module.scss";

type Props<T extends InputTextElementTag> = {
  className?: string;
  label?: React.ReactNode;
  inputElement?: T;
  inputProps?: ComponentProps<T>;
};

const defaultProps = {
  inputElement: "input",
  inputProps: {},
};

function InputComponent<
  TInputElementTag extends InputTextElementTag = InputTextElementTag,
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>({
  className,
  inputElement,
  inputProps,
  label,
  ...restProps
}: Omit<ControllerProps<TFieldValues, TName>, "render"> & Props<TInputElementTag>) {
  return (
    <Controller
      {...restProps}
      render={({ field, fieldState: { error } }) => {
        return (
          <InputText
            inputElement={inputElement as InputTextElementTag}
            {...inputProps}
            {...field}
            label={label}
            containerClassName={clsx(styles.field, className)}
            errorMessage={error?.message}
          />
        );
      }}
    />
  );
}

InputComponent.defaultProps = defaultProps;

export default InputComponent;
