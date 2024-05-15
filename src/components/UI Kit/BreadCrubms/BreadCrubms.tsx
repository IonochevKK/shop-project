import React from "react";
import "./breadCrubms.scss";

interface BreadCrubmsProps {
  children: React.ReactNode;
}
const BreadCrubms: React.FC<BreadCrubmsProps> = ({ children }) => {
  return <div className="breadCrubms">{children}</div>;
};

export default BreadCrubms;
