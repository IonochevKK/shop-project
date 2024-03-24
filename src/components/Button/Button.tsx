import classNames from "classnames";
import "./button.scss";

type TypeButton =
  | "primary"
  | "secondary_1"
  | "secondary_2"
  | "link"
  | "link_center"
  | "icon_left"
  | "icon_right";

interface ButtonProps {
  block?: boolean;
  className?: string;
  type?: TypeButton;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  block,
  className,
  type,
  disabled,
  icon,
  onClick,
  children,
}) => {
  const buttonClasses = classNames(
    "button",
    `button-${type}`,
    { "button-block": block },
    className
  );
  const iconClasses = classNames("button-icon", {
    "icon-left": type === "icon_left",
    "icon-right": type === "icon_right",
  });

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {type === "icon_left" && <span className={iconClasses}>{icon}</span>}
      {children}
      {type === "icon_right" && <span className={iconClasses}>{icon}</span>}
    </button>
  );
};

export default Button;
