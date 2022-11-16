import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import HamburgerMenu from "./HamburgerMenu";
import MenuItems from "./MenuItems";
import Feedback from "../../../../pages/Home/feedback";
import CustomDrawer from "../../../Modal/Drawer";

const NavMenuMin = ({menuItems}) => {
  const [isOpen, setOpen] = useState(false);
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

  const renderMenu = () => (
    <div className="menu-vertical">
      <ul>
        {stack.length > 1 ? (
          <li className="menu-back" onClick={handleBack}>
            {t("navigation.back")}
          </li>
        ) : (
          <div className="menu-back-plug" />
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
  );

  return (
    <>
      <HamburgerMenu
        isOpen={isOpen}
        onClick={() => {
          setOpen(!isOpen);
          setStack([menuItems]);
        }}
        width={20}
        height={15}
        strokeWidth={1}
        color={"var(--textPrimary)"}
        rotate={0}
        borderRadius={0}
        animationDuration={0.5}
      />
      <CustomDrawer
        open={isOpen}
        onClose={() => setOpen(false)}
      >
        {renderMenu()}
      </CustomDrawer>
    </>
  );
};

export default NavMenuMin;
