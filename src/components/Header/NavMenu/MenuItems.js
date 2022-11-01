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

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  const getLink = () => (
    <a href={items.url} target="_blank" rel="noreferrer noopener">
      {items.title}
    </a>
  );
  
  const getSubmenu = () => {
    const subItem = items.url ? getLink() : items.title;
    let arrowItem = depthLevel > 0 && <span>&raquo;</span>;

    return (
      <>
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => setDropdown((prev) => !prev)}
        >
          {subItem}
          {arrowItem}
        </button>
        <Dropdown
          depthLevel={depthLevel}
          submenus={items.submenu}
          dropdown={dropdown}
        />
      </>
    );
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.submenu ? getSubmenu() : getLink()}
    </li>
  );
};

export default MenuItems;
