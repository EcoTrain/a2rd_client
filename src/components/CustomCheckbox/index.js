import React from "react";
import "./index.scss";

const CustomCheckbox = ({label, isChecked, onClick, style, boxStyle}) => {
  return (
    <label style={style} className="customCheckbox font-size-5">
      <input
        type="checkbox"
        checked={isChecked}
        onClick={onClick}
        onChange={() => {}}
        style={boxStyle}
      />
      {label}
    </label>
  );
};

export default CustomCheckbox;
