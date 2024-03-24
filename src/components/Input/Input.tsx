import React from "react";
import "./input.scss";
import classNames from "classnames";

type TypeInput = "text" | "tel" | "email" | "bigText";

interface InputProps {
  type: TypeInput;
  className?: string;
  placeholder?: string;
  block?: boolean;
  postfix?: React.ReactNode | string | number;
  value?: string | number;
  disabled?: boolean;
  err?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  className,
  placeholder,
  block,
  postfix,
  value,
  disabled,
  err,
}) => {
  const ClassNameInput = classNames(
    { "custom-err": err },
    "custom",
    `custom-${type}`,
    { "custom-block": block },

    className
  );
  return (
    <>
      {type !== "bigText" && (
        <div className={type === "tel" ? " relative" : ""}>
          <div className={err ? "flex" : ""}>
            <input
              placeholder={placeholder}
              className={ClassNameInput}
              value={value}
              type={type}
              disabled={disabled}
              id={type}
            />
            {type === "tel" && <span className="postfix">{postfix}</span>}
          </div>
          {err && <label className="label-err">Недопустимые символы</label>}
        </div>
      )}

      {type === "bigText" && (
        <div className={err ? "flex" : ""}>
          <textarea placeholder={placeholder} className={ClassNameInput} />
          {err && <label className="label-err">Недопустимые символы</label>}
        </div>
      )}
    </>
  );
};

export default Input;
