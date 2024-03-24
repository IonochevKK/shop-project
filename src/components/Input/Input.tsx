import React from "react";
import "./input.scss";
import classNames from "classnames";

type TypeInput = "text" | "tel" | "email" | "bigText";

interface InputProps {
  type?: TypeInput;
  className?: string;
  placeholder?: string;
  block?: boolean;
  postfix?: React.ReactNode | string | number;
  value?: string | number;
}

const Input: React.FC<InputProps> = ({
  type,
  className,
  placeholder,
  block,
  postfix,
  value,
}) => {
  const ClassNameInput = classNames(
    "custom",
    `custom-${type}`,
    { "custom-block": block },
    className
  );
  return (
    <div className={type === "tel" ? " relative" : ""}>
      {type !== "bigText" && (
        <input
          placeholder={placeholder}
          className={ClassNameInput}
          value={value}
          type={type}
        />
      )}
      {type === "bigText" && (
        <textarea placeholder={placeholder} className={ClassNameInput} />
      )}
      {type === "tel" && <span className="postfix">{postfix}</span>}
    </div>
  );
};

export default Input;
