import React from "react";
import "./svgIcon.scss";
import ExitSVG from "../../../../public/svg/exit.svg?react";
import UserSVG from "../../../../public/svg/user.svg?react";
import GoodsSVG from "../../../../public/svg/goods.svg?react";
import classNames from "classnames";
type TypeIcon = "exit" | "basket" | "user";
interface SvgIconProps {
  type: TypeIcon;
  countGoods?: number;
}

const SvgIcon: React.FC<SvgIconProps> = ({ type, countGoods }) => {
  if (type === "exit") {
    return (
      <div className="svg-icon">
        <ExitSVG />
      </div>
    );
  }
  if (type === "basket") {
    return (
      <>
        <div className={classNames("svg-icon", { "goods-item": countGoods })}>
          <GoodsSVG />
          {countGoods !== 0 && (
            <div className="goods">
              <span>{countGoods}</span>
            </div>
          )}
        </div>
      </>
    );
  }
  if (type === "user") {
    return (
      <div className="svg-icon">
        <UserSVG />
      </div>
    );
  }
};

export default SvgIcon;
