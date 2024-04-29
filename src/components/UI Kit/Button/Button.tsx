import classNames from "classnames";
import React from "react";
import "./button.scss";

type TypeButton =
  | "primary"
  | "secondary_1"
  | "secondary_2"
  | "link"
  | "link_center"
  | "icon_left"
  | "icon_right";

export interface ButtonProps {
  block?: boolean;
  className?: string;
  type?: TypeButton;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  children?: React.ReactNode;
  padding?: string;
  id?: string;
}

const Button: React.FC<ButtonProps> = ({
  block,
  className,
  type,
  disabled,
  icon,
  onClick,
  children,
  padding,
  id,
}) => {
  const buttonClasses = classNames(
    "button",
    `button-${type}`,
    { "button-block": block },
    className
  );
  const iconContainerClasses = classNames("button-icon", {
    "icon-left": type === "icon_left",
    "icon-right": type === "icon_right",
  });
  const PaddingButtonStyle: React.CSSProperties = padding
    ? { padding: padding }
    : {};
  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      style={{ ...PaddingButtonStyle }}
      id={id}
    >
      {type === "icon_left" && (
        <span className={iconContainerClasses}>{icon}</span>
      )}
      {children}
      {type === "icon_right" && (
        <span className={iconContainerClasses}>{icon}</span>
      )}
    </button>
  );
};

export default Button;
