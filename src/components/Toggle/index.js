import React from "react";
import "./index.scss";

import { ReactComponent as Sun } from "../../assets/sun.svg";
import { ReactComponent as Moon } from "../../assets/moon.svg";

const Toggle = ({ value, onChange }) => (
  <div className="toggler">
    <label className={"switch"} htmlFor="toggler">
      <input
        id="toggler"
        type="checkbox"
        onClick={onChange}
        checked={value}
        readOnly
      />
      <span className={"slider"}>
        <Sun className="icon light-icon" />
        <Moon className="icon dark-icon" />
      </span>
      <span className={"wave"} />
    </label>
  </div>
);

export default Toggle;
