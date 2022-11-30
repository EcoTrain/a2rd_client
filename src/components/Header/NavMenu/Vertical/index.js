import React, {useContext, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import HamburgerMenu from "./HamburgerMenu";
import MenuItems from "./MenuItems";
import CustomDrawer from "../../../Modal/Drawer";
import {HeaderContext} from "../../../../contexts/HeaderContext";

const NavMenuMin = ({menuItems}) => {
  const [isOpen, setOpen] = useState(false);
  const [stack, setStack] = useState([menuItems]);
  const {t} = useTranslation();

  const {
    setHeaderFixed,
    setHeaderVisible,
    setHeaderBackground,
    dropHeaderBackground,
  } = useContext(HeaderContext);

  useEffect(() => {
    // TODO: share headerHeight
    const headerHeight = 40;
    if (isOpen) {
      setHeaderBackground("var(--darkWhite)");
      setHeaderFixed(true);
      setHeaderVisible(true);
      document.documentElement.style.overflow = "hidden";
    } else if (!isOpen || window.innerWidth > 960) {
      dropHeaderBackground();
      setHeaderFixed(false);
      if (window.pageYOffset > headerHeight) {
        setHeaderVisible(false);
      }
      document.documentElement.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleNext = (newItems) => {
    let newStack = [...stack];
    newStack.push(newItems);
    setStack(newStack);
  };
  const handleBack = () => {
    let newStack = [...stack];
    newStack.splice(-1);
    setStack(newStack);
  };

  const renderMenu = () => (
    <div className="menu-vertical">
      <ul>
        {stack.length > 1 ? (
          <li className="menu-back font-size-3" onClick={handleBack}>
            {t("navigation.back")}
          </li>
        ) : (
          <div className="menu-back-plug" />
        )}
        {stack[stack.length - 1].map((menu, index) => {
          return <MenuItems items={menu} key={index} onNext={handleNext} />;
        })}
      </ul>
    </div>
  );

  return (
    <>
      <div
        onClick={() => {
          setOpen(!isOpen);
          setStack([menuItems]);
        }}
        style={{padding: "1em", cursor: "pointer"}}
      >
        <HamburgerMenu
          isOpen={isOpen}
          width={20}
          height={15}
          strokeWidth={1}
          color={"var(--textPrimary)"}
          rotate={0}
          borderRadius={0}
          animationDuration={0.5}
        />
      </div>
      <CustomDrawer
        open={isOpen}
        onClose={() => setOpen(false)}
        style={{
          top: "var(--headerHeight)",
          height: "calc(100% - var(--headerHeight))",
        }}
      >
        {renderMenu()}
      </CustomDrawer>
    </>
  );
};

export default NavMenuMin;
