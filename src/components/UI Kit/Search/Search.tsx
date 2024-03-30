import classNames from "classnames";
import React, { ChangeEventHandler } from "react";
import "./search.scss";
interface SearchProps {
  block?: boolean;
  className?: string;
  prefix?: string | React.ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  placeholder?: string;
  dropdownVisible?: boolean; // управления видимостью выпадающего списка
  dropdownItems?: ItemKurs[]; // список элементов выпадающего списка
  onInputChange?: ChangeEventHandler<HTMLInputElement>; // обработчик изменения значения поля ввода
  onDropdownItemClick?: (item: ItemKurs) => void; // обработчик выбора элемента из выпадающего списка
  onChangeDropdownVisible?: (visible: boolean) => void; // Добавляем обработчик изменения видимости выпадающего списка
  inputValue?: string;
}

export interface ItemKurs {
  id: number;
  nameKurs: string;
  priseKurs: number;
  timeKurs: number;
}

const Search: React.FC<SearchProps> = ({
  block,
  prefix,
  dropdownVisible,
  dropdownItems,
  onInputChange,
  onDropdownItemClick,
  onChangeDropdownVisible,
  className,
  disabled,
  placeholder,
  inputValue,
}) => {
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (onInputChange) onInputChange(event);
  };

  const handleItemClick = (item: ItemKurs) => {
    if (onDropdownItemClick) onDropdownItemClick(item);
    if (onChangeDropdownVisible) onChangeDropdownVisible(false);
  };

  const SearchClassName = classNames(
    "search",
    { "search-block": block },
    className
  );

  return (
    <div className="relative">
      <input
        data-testid="search"
        type="search"
        className={SearchClassName}
        onChange={handleInputChange}
        disabled={disabled}
        title="search"
        placeholder={placeholder}
        value={inputValue}
      />
      <span className="prefix" data-testid="prefix">
        {prefix}
      </span>
      {dropdownVisible && (
        <div className="dropdown">
          {dropdownItems?.map((item, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleItemClick(item)}
            >
              {item.nameKurs}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
