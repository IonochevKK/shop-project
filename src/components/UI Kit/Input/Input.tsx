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
  disabled?: boolean;
  err?: boolean;
  onChange?: () => void;
}

const Input: React.FC<InputProps> = ({
  type,
  className,
  placeholder,
  block,
  postfix,
  disabled,
  err,
  onChange,
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
              onChange={onChange}
              data-testid="input"
              placeholder={placeholder}
              className={ClassNameInput}
              type={type}
              disabled={disabled}
              id={type}
            />
            {type === "tel" && <span className="postfix" data-testid="postfix">{postfix}</span>}
          </div>
          {err && <label className="label-err" data-testid="err">Недопустимые символы</label>}
        </div>
      )}

      {type === "bigText" && (
        <div className={err ? "flex" : ""}>
          <textarea
            placeholder={placeholder}
            className={ClassNameInput}
            data-testid="input"
          />
          {err && <label className="label-err">Недопустимые символы</label>}
        </div>
      )}
    </>
  );
};

export default Input;
