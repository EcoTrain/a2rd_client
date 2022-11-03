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
            height: "1.6rem",
            padding: "0.1rem 0.4rem",
            transition: "all 0.2s ease-in-out",
          }}
        />
      </li>
    </ul>
  );
};

export default NavMenuMax;
