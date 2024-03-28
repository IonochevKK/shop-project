import classNames from "classnames";
import React from "react";
import "./label.scss";
type LabelType = "success" | "warn" | "danger";
type LabelSize = "large" | "medium" | "small";
type LableTypeCards = "curs" | "price";
type LableSizeTypeCards = "smallCard" | "largeCard";

interface LabelProps {
  type?: LabelType;
  size?: LabelSize;
  typeCards?: LableTypeCards;
  sizeTypeCards?: LableSizeTypeCards;
  children: React.ReactNode | string;
  block?: boolean;
}
const Label: React.FC<LabelProps> = ({
  type,
  size,
  children,
  block,
  typeCards,
  sizeTypeCards,
}) => {
  return (
    <>
      <div
        data-testid="label"
        className={classNames(
          "label",
          `label-${type}`,
          `label-${size}`,
          `label-${typeCards}`,
          `label-${sizeTypeCards}`,
          {
            "label-block": block,
          }
        )}
      >
        {children}
      </div>
    </>
  );
};

export default Label;
