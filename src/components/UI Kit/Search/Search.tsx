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
}
const Search: React.FC<SearchProps> = ({
  block,
  prefix,
  onChange,
  className,
  disabled,
  placeholder,
}) => {
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
        onChange={onChange}
        disabled={disabled}
        title="search"
        placeholder={placeholder}
      />
      <span className="prefix" data-testid="prefix">
        {prefix}
      </span>
    </div>
  );
};

export default Search;
