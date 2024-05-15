/// <reference types="vite-plugin-svgr/client" />
import React, { useEffect, useState } from "react";
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
  name?: string;
}

const DropDown: React.FC<DropDownProps> = ({ options, name }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSelectedOption(options[0]);
  }, [options]);

  const handleToggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
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
            {selectedOption ? selectedOption.label : options[0]?.label}
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
        {isOpen && (
          <div className={classNames("options", { open: isOpen })}>
            {options.map((option, index) => (
              <div
                key={index}
                className="option"
                onClick={() => handleSelectOption(option)}
                data-value={option.value}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      {selectedOption && (
        <input type="hidden" name={name} value={selectedOption?.value} />
      )}
    </div>
  );
};

export default DropDown;
