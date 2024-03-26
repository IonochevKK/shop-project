import React from "react";
import "./divider.scss";
import classNames from "classnames";
type DividerType = "gray" | "blue";

interface DividerProps {
  type?: DividerType;
}
const Divider: React.FC<DividerProps> = ({ type }) => {
  return (
    <>
      <div className={classNames("divider", `divider-${type}`)} />
    </>
  );
};

export default Divider;
