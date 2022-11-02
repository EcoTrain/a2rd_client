import React from "react";
import MenuItems from "./MenuItems";

const NavMenuMax = ({menuItems}) => {
  return (
    <ul className={"menu-horizontal"}>
      {menuItems.map((menu, index) => {
        const depthLevel = 0;
        return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
      })}
    </ul>
  );
};

export default NavMenuMax;
