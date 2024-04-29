import React, { useState } from "react";
import "./input.scss";
import classNames from "classnames";
import { formatPhoneNumber } from "../../../utils/formatPhoneNumber";

type TypeInput = "text" | "tel" | "email" | "bigText";

interface InputProps {
  type: TypeInput;
  className?: string;
  placeholder?: string;
  block?: boolean;
  postfix?: React.ReactNode | string | number;
  disabled?: boolean;
  err?: boolean | string;
  name?: string;
  onChange?: (value: string) => void;
  id?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  className,
  placeholder,
  block,
  postfix,
  disabled,
  err,
  name,
  onChange,
  id,
}) => {
  const [phoneValue, setPhoneValue] = useState("");
  const [errPhone, setErrPhone] = useState<boolean>(false);
  const ClassNameInput = classNames(
    { "custom-err": err },
    "custom",
    `custom-${type}`,
    { "custom-block": block },

    className
  );

  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    if (type === "tel") {
      setErrPhone(false);
      if (value.match(/[\d() -]/g) && phoneValue.length < 15) {
        const formattedValue = formatPhoneNumber(value);
        console.log();
        setPhoneValue(formattedValue);
        if (onChange) onChange(formattedValue);
      } else {
        setErrPhone(true);
        console.log(1);
      }
    } else {
      setPhoneValue(value);
      if (onChange) onChange(value);
    }
    if (
      event.nativeEvent &&
      event.nativeEvent instanceof InputEvent &&
      event.nativeEvent.inputType === "deleteContentBackward"
    ) {
      const lastChar = phoneValue.slice(-1);
      if (lastChar === "-" || lastChar === ")" || lastChar === " ") {
        let newValue = phoneValue.slice(0, -1);
        while (newValue.slice(-1) !== "(" && newValue.slice(-1) !== " ") {
          newValue = newValue.slice(0, -1);
        }
        setPhoneValue(newValue);
      } else {
        setPhoneValue(phoneValue.slice(0, -1));
      }
      return;
    }
  };

  return (
    <>
      {type !== "bigText" && (
        <div className={type === "tel" ? " relative" : ""}>
          <label className={err ? "flex" : ""} htmlFor={name}>
            <input
              onChange={onChangeInput}
              data-testid="input"
              placeholder={placeholder}
              className={ClassNameInput}
              type={type}
              disabled={disabled}
              id={id}
              name={name}
              value={phoneValue}
            />
            {type === "tel" && (
              <span className="postfix" data-testid="postfix">
                {postfix}
              </span>
            )}
          </label>
          {err ||
            (errPhone && (
              <label className="label-err" data-testid="err">
                {err || errPhone === true ? "Длина номера 11 символов" : `${err}`}
              </label>
            ))}
        </div>
      )}

      {type === "bigText" && (
        <div className={err ? "flex" : ""}>
          <textarea
            placeholder={placeholder}
            className={ClassNameInput}
            data-testid="input"
            name={name}
            style={{ height: "auto", resize: "none" }}
          />
          {err && <label className="label-err">Недопустимые символы</label>}
        </div>
      )}
    </>
  );
};

export default Input;
