import classNames from "classnames";
import React, { ChangeEventHandler } from "react";
import "./checkBox.scss";
type TypeCheckBox = "radio" | "checkbox";

interface CheckBoxProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: TypeCheckBox;
  disabled?: boolean;
  name?: string;
  children?: React.ReactNode;
  value?: string;
  classnames?: string | boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  type = "checkbox",
  onChange,
  disabled,
  value,
  name,
  children,
  classnames,
}) => {
  const CheckBoxClasses = classNames(
    "checkbox",
    `checkbox-${type}`,
    classnames
  );
  return (
    <label htmlFor={value}>
      <span className={CheckBoxClasses}>
        <input
          name={name}
          id={value}
          value={value}
          type={type}
          onChange={onChange}
          disabled={disabled}
        />
      </span>
      <span>{children}</span>
    </label>
  );
};

export default CheckBox;
