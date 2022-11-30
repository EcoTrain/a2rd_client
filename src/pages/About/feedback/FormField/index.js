import React, {createElement, useEffect, useRef} from "react";
import uniqueId from "lodash/uniqueId";
import "./formField.scss";

const FormField = ({tag, title, type, value, onChange}) => {
  const id = uniqueId("formInput_");
  const fieldRef = useRef();

  useEffect(() => {
    if (value) {
      console.log(fieldRef.current);
      fieldRef.current.classList.add("focused");
    }
  }, [value]);

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
    <div className="formField" ref={fieldRef}>
      <label htmlFor={id}>{title}</label>
      {InputElement}
    </div>
  );
};

export default FormField;
