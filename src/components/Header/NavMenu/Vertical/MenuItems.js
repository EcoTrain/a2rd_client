import React from "react";

const MenuItems = ({items, onNext}) => {
  const getItemLink = () => {
    return (
      <a
        className={!items.submenu ? "menu-item-content" : ""}
        href={items.url}
        rel="noreferrer noopener"
      >
        <div className="menu-item-title">{items.title}</div>
      </a>
    );
  };
  const getItemSubmenu = () => {
    let submenuItems = [...items.submenu];
    if (items.url && !items.notIntro) {
      submenuItems.unshift({title: "Introduction", url: items.url});
    }

    const subItem = <div className="menu-item-title">{items.title}</div>;
    const arrowItem = <span>&#8250;</span>;

    return (
      <div className="menu-item-content" onClick={() => onNext(submenuItems)}>
        {subItem}
        {arrowItem}
      </div>
    );
  };

  let classes = ["menu-item", "font-size-2"];
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
