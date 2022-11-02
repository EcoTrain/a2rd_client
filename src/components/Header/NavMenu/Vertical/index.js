import React from "react";
import MenuItems from "../Horizontal/MenuItems";

const NavMenuMin = ({menuItems}) => {
  return (
    <ul className={"menu-verical"}>
      {menuItems.map((menu, index) => {
        const depthLevel = 0;
        return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
      })}
    </ul>
  );
};

export default NavMenuMin;
