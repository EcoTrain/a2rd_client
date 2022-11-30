import React from "react";
import "./index.scss";

const CustomCheckbox = ({label, isChecked, onClick, style}) => {
  return (
    <label className="customCheckbox font-size-5">
      <input
        type="checkbox"
        checked={isChecked}
        onClick={onClick}
        onChange={() => {}}
        style={style}
      />
      {label}
    </label>
  );
};

export default CustomCheckbox;
