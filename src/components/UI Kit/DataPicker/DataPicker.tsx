import classNames from "classnames";
import React from "react";
import "./dataPicker.scss";

interface DataPickerProps {
  block?: boolean;
  disabled?: boolean;
  postfix?: string | React.ReactNode;
}

const DataPicker: React.FC<DataPickerProps> = ({
  block,
  disabled,
  postfix,
}) => {
  const DataPickerClassName = classNames("dataPicker", {
    "dataPicker-block": block,
  });
  return (
    <>
      <input
        type="date"
        className={DataPickerClassName}
        disabled={disabled}
        title="date"
      />
      <span className="postfix">{postfix}</span>
    </>
  );
};

export default DataPicker;
