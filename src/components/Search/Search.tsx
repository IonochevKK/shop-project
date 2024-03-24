import classNames from "classnames";
import React, { ChangeEventHandler } from "react";
import "./search.scss";
interface SearchProps {
  block?: boolean;
  className?: string;
  postfix?: string | React.ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  err?: boolean;
  disabled?: boolean;
}
const Search: React.FC<SearchProps> = ({
  block,
  postfix,
  onChange,
  className,
  err,
  disabled,
}) => {
  const SearchClassName = classNames(
    "search",
    { "search-block": block },
    className
  );
  return (
    <div style={{ position: "relative" }}>
      <input
        type="search"
        className={SearchClassName}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="postfix">{postfix}</span>
    </div>
  );
};

export default Search;
