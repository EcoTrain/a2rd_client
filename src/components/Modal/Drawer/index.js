import React, {useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {HeaderContext} from "../../../contexts/HeaderContext";
import "./index.scss";

const CustomDrawer = ({
  children, // Body element
  title = "", // Header element or text
  open = false, // Trigger to show/hide
  onClose = () => {}, // Callback on close modal
  style = {},
  width = "100vw",
}) => {
  const {setHeaderFixed, setHeaderBackground, dropHeaderBackground} =
    useContext(HeaderContext);
  const [isOpen, setOpen] = useState(open);
  const [zCount, setCount] = useState(getCount());
  const [classList, setClassList] = useState(getClass());

  const el = React.useMemo(() => document.createElement("div"), []);
  const drawer = React.useMemo(() => ReactDOM.createPortal(getContent(), el));

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  useEffect(() => {
    if (open) {
      setCount(getCount());

      setHeaderFixed(true);
      setHeaderBackground("var(--darkWhite)");
      document.documentElement.style.overflow = "hidden";
    } else {
      const count = document.querySelectorAll(".customDrawer-open").length;
      if (count > 1) {
        setHeaderFixed(false);
        dropHeaderBackground();
        document.documentElement.style.overflow = "unset";
      }
    }
    setClassList(getClass());
    setOpen(open);
  }, [open, children]);

  function getContent() {
    return (
      <div
        className={classList}
        style={{
          visibility: isOpen ? "visible" : "hidden",
          width: width,
          transform: isOpen ? "translateX(0%)" : `translateX(-${width})`,
          zIndex: zCount,
          ...style,
        }}
      >
        {title && (
          <div className="customDrawer-header">
            {
              <div className="customDrawer-header-cross" onClick={handlerClose}>
                &#215;
              </div>
            }
            {title}
          </div>
        )}
        <div className="customDrawer-body">{children}</div>
      </div>
    );
  }

  function getClass() {
    let classList = ["customDrawer", `customDrawer_${zCount}`];
    if (open) {
      classList.push("customDrawer-open");
    }
    return classList.join(" ");
  }

  function getCount() {
    return 1000 + document.querySelectorAll(".customDrawer-open").length + 1;
  }

  function handlerClose() {
    setOpen(false);
    onClose();
  }

  return drawer;
};

export default CustomDrawer;
