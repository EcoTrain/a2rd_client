import React from "react";

const MenuItems = ({items, onNext}) => {
  const getItemLink = () => {
    return (
      <a
        className={!items.submenu ? "menu-item-content" : ""}
        href={items.url}
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="menu-item-title">{items.title}</div>
      </a>
    );
  };
  const getItemSubmenu = () => {
    const subItem = items.url ? (
      getItemLink()
    ) : (
      <div onClick={() => onNext(items.submenu)}>
        <div className="menu-item-title">{items.title}</div>
      </div>
    );

    const arrowItem = items.submenu && <span>&raquo;</span>;

    return (
      <div className="menu-item-content">
        {subItem}
        {arrowItem}
      </div>
    );
  };

  let classes = ["menu-item"];
  if (items.submenu) {
    classes.push("menu-item-submenu");
  }

  return (
    <li className={classes.join(" ")}>
      {items.submenu ? getItemSubmenu() : getItemLink()}
    </li>
  );
};

export default MenuItems;
