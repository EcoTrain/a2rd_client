import React, {useState, useEffect, useRef} from "react";
import Dropdown from "./Dropdown";

const MenuItems = ({items, depthLevel}) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const getItemLink = () => {
    return (
      <a
        className="menu-item-content"
        href={items.url}
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
      <div className="menu-item-content">
        <div className="menu-item-title">{items.title}</div>
      </div>
    );
    // const arrowItem = depthLevel > 0 && <span>&#10095;</span>;
    const arrowItem = depthLevel > 0 && <span>&#9660;</span>;

    return (
      <>
        <div className="menu-item-subitem">
          {subItem}
          {arrowItem}
        </div>
        <Dropdown
          depthLevel={depthLevel}
          submenus={items.submenu}
          dropdown={dropdown}
        />
      </>
    );
  };

  let classes = ["menu-item"];
  if (items.submenu) {
    classes.push("menu-item-submenu");
  }
  if (!depthLevel) {
    classes.push("menu-item-main");
  } else {
    classes.push("menu-item-sub");
  }

  return (
    <li
      className={classes.join(" ")}
      ref={ref}
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
      onClick={() => dropdown && setDropdown(false)}
    >
      {items.submenu ? getItemSubmenu() : getItemLink()}
    </li>
  );
};

export default MenuItems;
