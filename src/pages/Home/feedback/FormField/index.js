import React, { createElement } from "react";
import _ from "lodash";
import "antd/dist/antd.min.css";
import "./formField.scss";

const FormField = ({ tag, title, type, value, onChange }) => {
  const id = _.uniqueId("formInput_");
  const InputElement = createElement(tag, {
    id,
    className: "formInput",
    type,
    name: type,
    value,
    onChange: (e) => onChange(e.target.value),
    onFocus: (e) => e.target.parentElement.classList.add("focused"),
    onBlur: (e) => {
      if (!e.target.value) {
        e.target.parentElement.classList.remove("focused");
      }
    },
  });
  return (
    <div className="formField">
      <label htmlFor={id}>{title}</label>
      {InputElement}
    </div>
  );
};

export default FormField;
