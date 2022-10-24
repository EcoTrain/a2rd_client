import React from "react";
import "./index.scss";

const CustomCheckbox = ({key, label, isChecked, onClick, style}) => {
  return (
    <label key={key} className="customCheckbox font-text-small">
      <input
        type="checkbox"
        checked={isChecked}
        onClick={onClick}
        style={style}
      />
      {label}
    </label>
  );
};

export default CustomCheckbox;
