import React from "react";
import MenuItems from "./MenuItems";
import Feedback from "../../../../pages/Home/feedback";

const NavMenuMax = ({menuItems}) => {
  return (
    <ul className={"menu-horizontal"}>
      {menuItems.map((menu, index) => {
        const depthLevel = 0;
        return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
      })}
      <li>
        <Feedback
          buttonClass={"btn-outline"}
          buttonStyle={{
            fontSize: "0.9rem",
          }}
        />
      </li>
    </ul>
  );
};

export default NavMenuMax;
