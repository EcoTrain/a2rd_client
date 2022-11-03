import React, {useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import HamburgerMenu from "./HamburgerMenu";
import MenuItems from "./MenuItems";
import Feedback from "../../../../pages/Home/feedback";
import {HeaderContext} from "../../../../contexts/HeaderContext";

const NavMenuMin = ({menuItems}) => {
  const {setHeaderFixed, setHeaderBackground, dropHeaderBackground} =
    useContext(HeaderContext);
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
              setHeaderFixed(false);
              dropHeaderBackground();
              document.documentElement.style.overflow = "unset";
            } else {
              setHeaderFixed(true);
              setHeaderBackground("var(--darkWhite)");
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
        style={{
          transform: visible
            ? "translateX(0%)"
            : `translateX(-${window.innerWidth}px)`,
        }}
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
          <li>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2em",
              }}
            >
              <Feedback
                buttonClass={"font-title-h1"}
                buttonStyle={{
                  width: "90%",
                  cursor: "pointer",
                  background: "var(--lightGray)",
                  textAlign: "center",
                  borderRadius: "0.5em",
                }}
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavMenuMin;
