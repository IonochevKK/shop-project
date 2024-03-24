import React from "react";
import "./svgIcon.scss";
interface SvgIconProps {
  height?: number | string;
  width?: number | string;
  icon?: React.ReactNode;
}

const SvgIcon: React.FC<SvgIconProps> = ({ icon, height, width }) => {
  return (
    <div className="svg-icon" style={{ height, width }}>
      {icon}
    </div>
  );
};

export default SvgIcon;
