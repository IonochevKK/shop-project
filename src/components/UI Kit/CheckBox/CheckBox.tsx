import classNames from "classnames";
import React, { ChangeEventHandler } from "react";
import "./checkBox.scss";

type TypeCheckBox = "radio" | "checkbox";

interface CheckBoxProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type: TypeCheckBox;
  disabled?: boolean;
  name?: string;
  children?: React.ReactNode;
  value?: string;
  classnames?: string | boolean;
  checked?: boolean; // Добавляем свойство checked
}

const CheckBox: React.FC<CheckBoxProps> = ({
  type,
  onChange,
  disabled,
  value,
  name,
  children,
  classnames,
  checked,
}) => {
  const CheckBoxClasses = classNames(
    "checkbox",
    `checkbox-${type}`,
    classnames
  );
  return (
    <label className={CheckBoxClasses}>
      <input
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        disabled={disabled}
        checked={checked}
      />
      <span>{children}</span>
    </label>
  );
};

export default CheckBox;
