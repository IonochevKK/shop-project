import classNames from "classnames";
import React from "react";

interface TextProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  body1?: boolean;
  body2?: boolean;
  body2_bold?: boolean;
  body3?: boolean;
  body3_bold?: boolean;
  body4?: boolean;
  body4_bold?: boolean;
  body5?: boolean;
  body6?: boolean;
  caption1?: boolean;
  caption2?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Text: React.FC = ({
  h1,
  h2,
  h3,
  body1,
  body2,
  body2_bold,
  body3,
  body3_bold,
  body4,
  body4_bold,
  body5,
  body6,
  caption1,
  caption2,
  className,
  children,
}: TextProps) => {
  const textClasses = classNames(className, {
    "text-h1": h1,
    "text-h2": h2,
    "text-h3": h3,
    "text-body1": body1,
    "text-body2": body2,
    "text-body2_bold": body2_bold,
    "text-body3": body3,
    "text-body_3": body3_bold,
    "text-body4": body4,
    "text-body4_bold": body4_bold,
    "text-body5": body5,
    "text-body6": body6,
    "text-caption1": caption1,
    "text-caption2": caption2,
  });
  if (h1) return <h1 className={textClasses}>{children}</h1>;
  if (h2) return <h2 className={textClasses}>{children}</h2>;
  if (h3) return <h3 className={textClasses}>{children}</h3>;
  return <div className={textClasses}>{children}</div>;
};

export default Text;
