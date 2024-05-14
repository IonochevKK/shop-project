/// <reference types="vite-plugin-svgr/client" />
import React, { useState } from "react";
import "./dropDown.scss";
import classNames from "classnames";
import DropDownArrow from "../../../../public/svg/dropdown_down.svg?react";
import DropDownArrowUp from "../../../../public/svg/dropdown_up.svg?react";
export interface Option {
  value: string;
  label: string;
}
interface DropDownProps {
  options: Option[];
}
const DropDown: React.FC<DropDownProps> = ({ options }) => {
  const [selectedOtion, setSelectedOtion] = useState<Option | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const handleToggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: Option) => {
    setSelectedOtion(option);
    setIsOpen(false);
  };
  return (
    <div className="container-DropDown">
      <div
        className="dropDown"
        onClick={handleToggleDropDown}
        data-testid="dropDown"
      >
        <div className="selectedOption">
          <div className="selectText">
            {selectedOtion ? selectedOtion.label : "Всё"}
          </div>
          <span>
            {isOpen ? (
              <DropDownArrowUp
                role="img"
                name="DropDownArrowUp"
                data-testid="dropDownArrowUp"
              />
            ) : (
              <DropDownArrow
                role="img"
                name="DropDownArrow"
                data-testid="dropDownArrow"
              />
            )}
          </span>
        </div>
        <div className={classNames("options", { open: isOpen })}>
          {options.map((option, index) => (
            <div
              key={index}
              className="option"
              onClick={() => handleSelectOption(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
