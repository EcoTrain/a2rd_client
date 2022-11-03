import React, {useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {HeaderContext} from "../../../contexts/HeaderContext";
import "./index.scss";

const CustomDrawer = ({
  children, // Body element
  title = "", // Header element or text
  open = false, // Trigger to show/hide
  headerShown = true,
  onClose = () => {}, // Callback on close modal
  placement = "left",
  width = "100vw",
}) => {
  const el = React.useMemo(() => document.createElement("div"), []);

  const {setHeaderFixed, setHeaderBackground, dropHeaderBackground} =
    useContext(HeaderContext);
  const [zCount, setCount] = useState(getCount());
  const [zClass, setClass] = useState(getClass());
  const [isOpen, setOpen] = useState(open);

  function getClass() {
    return `customDrawer_${getCount()}`;
  }
  function getCount() {
    return 1000 + document.querySelectorAll(".customDrawer").length + 1;
  }

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el, children]);

  useEffect(() => {
    if (open) {
      setClass(getClass());
      setCount(getCount());

      setHeaderFixed(true);
      setHeaderBackground("var(--darkWhite)");
      document.documentElement.style.overflow = "hidden";
    } else {
      const count = document.querySelectorAll(".customModal").length;
      if (!count) {
        setHeaderFixed(false);
        dropHeaderBackground();
        document.documentElement.style.overflow = "unset";
      }
    }
    setOpen(open);
  }, [open, children]);

  const handlerClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    isOpen &&
    ReactDOM.createPortal(
      <>
        <div
          className={`customDrawer ${zClass}`}
          style={{
            width: width,
            transform: isOpen
              ? "translateX(0%)"
              : `translateX(-${window.innerWidth}px)`,
            zIndex: zCount,
          }}
        >
          {headerShown && (
            <div className="customDrawer-header">
              {
                <div
                  className="customDrawer-header-cross"
                  onClick={handlerClose}
                >
                  &#215;
                </div>
              }
              {title}
            </div>
          )}
          <div className="customDrawer-body">{children}</div>
        </div>
      </>,
      el
    )
  );
};

export default CustomDrawer;
