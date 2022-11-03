import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import HamburgerMenu from "./HamburgerMenu";
import MenuItems from "./MenuItems";

const NavMenuMin = ({menuItems}) => {
  const [visible, setVisible] = useState(false);
  const [stack, setStack] = useState([menuItems]);
  const {t} = useTranslation();

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

  return (
    <>
      <div style={{padding: "12px 0"}}>
        <HamburgerMenu
          isOpen={visible}
          onClick={() => {
            if (visible) {
              document.documentElement.style.overflow = "unset";
            } else {
              document.documentElement.style.overflow = "hidden";
            }
            setStack([menuItems]);
            setVisible(!visible);
          }}
          width={20}
          height={15}
          strokeWidth={1}
          color={"var(--textPrimary)"}
          rotate={0}
          borderRadius={0}
          animationDuration={0.5}
        />
      </div>
      <div
        className={"menu-vertical"}
        style={visible ? {width: "100%"} : {width: 0}}
      >
        <ul style={{margin: "2em"}}>
          {stack.length > 1 && (
            <li className="menu-back" onClick={handleBack}>
              {t("navigation.back")}
            </li>
          )}
          {stack[stack.length - 1].map((menu, index) => {
            return <MenuItems items={menu} key={index} onNext={handleNext} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default NavMenuMin;
