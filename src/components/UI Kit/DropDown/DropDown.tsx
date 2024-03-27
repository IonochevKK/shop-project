/// <reference types="vite-plugin-svgr/client" />
import React from "react";
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
  selectedOption: Option | null;
  isOpen: boolean;
  onToggle: () => void;
  onSelectOption: (option: Option) => void;
}
const DropDown: React.FC<DropDownProps> = ({
  options,
  selectedOption,
  isOpen,
  onToggle,
  onSelectOption,
}) => {
  return (
    <div className="container-DropDown">
      <div className="dropDown" onClick={onToggle} data-testid="dropDown">
        <div className="selectedOption">
          {selectedOption ? selectedOption.label : "Всё"}
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
              onClick={() => onSelectOption(option)}
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
