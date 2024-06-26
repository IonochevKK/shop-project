import React from "react";
import "./Title.scss";
import classNames from "classnames";
import Button from "../Button/Button";
import Text from "../Text/Text";
type TitleType = "flex" | "flexText";

interface TitleProps {
  type: TitleType;
  children: string | React.ReactNode;
  value?: string | React.ReactNode;
  style?: React.CSSProperties;
}
const Title: React.FC<TitleProps> = ({ value, children, type, style }) => {
  return (
    <div
      className={classNames(`divider-${type}`)}
      data-testid="title"
      style={style}
    >
      {children}
      {type === "flexText" && (
        <Button type="link">
          <Text body3_bold h2>
            {value}
          </Text>
        </Button>
      )}
    </div>
  );
};

export default Title;
