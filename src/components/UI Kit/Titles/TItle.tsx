import React from "react";
import Text from "../Text/Text";
import "./Title.scss";
import Divider from "../Divider/Divider";
import Button from "../Button/Button";
import classNames from "classnames";
type TitleType = "flex" | "flexText";
interface TitleProps {
  type: TitleType;
  value1: string;
  value2?: string | React.ReactNode;
}
const Title: React.FC<TitleProps> = ({ value1, value2, type }) => {
  return (
    <div className={classNames(`divider-${type}`)}>
      <Text h2>{value1}</Text>
      <Divider />
      {type === "flexText" && (
        <Button type="link">
          <Text body3_bold>{value2}</Text>
        </Button>
      )}
    </div>
  );
};

export default Title;
