import React from "react";

export interface BreadCrumbItemProps {
  href: string;
  text: string;
}
const BreadCrumbItem: React.FC<BreadCrumbItemProps> = ({ href, text }) => {
  return (
    <div className="breadCrumbItem">
      <a href={href}>{text}</a>
    </div>
  );
};

export default BreadCrumbItem;
