import classNames from "classnames";
import React, { ChangeEventHandler, RefObject } from "react";
import "./search.scss";
interface SearchProps {
  block?: boolean;
  className?: string;
  prefix?: string | React.ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  placeholder?: string;
  dropdownVisible?: boolean; // управления видимостью выпадающего списка
  dropdownItems?: string[]; // список элементов выпадающего списка
  onInputChange?: ChangeEventHandler<HTMLInputElement>; // обработчик изменения значения поля ввода
  onDropdownItemClick?: (item: string) => void; // обработчик выбора элемента из выпадающего списка
  onChangeDropdownVisible?: (visible: boolean) => void; // Добавляем обработчик изменения видимости выпадающего списка
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
}) => {
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (onInputChange) onInputChange(event);
  };

  const handleItemClick = (item: string) => {
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
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
