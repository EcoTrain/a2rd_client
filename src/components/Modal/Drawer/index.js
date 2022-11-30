import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import "./index.scss";

const CustomDrawer = ({
  children, // Body element
  title = "", // Header element or text
  open = false, // Trigger to show/hide
  onClose = () => {}, // Callback on close modal
  style = {},
}) => {
  const width = style.width || "100vw";
  const startZ = 1000;
  const [index, setIndex] = useState();

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
      setIndex(getCount() + startZ);
      document.documentElement.style.overflow = "hidden";
    } else {
      const _count = document.querySelectorAll(".customDrawer-open").length;
      if (!_count) {
        document.documentElement.style.overflow = "unset";
      }
    }
    // return () => (document.documentElement.style.overflow = "unset");
  }, [open]);

  function getContent() {
    return (
      <div
        className={getClass()}
        style={{
          visibility: open ? "visible" : "hidden",
          zIndex: index,
          width: width,
          transform: open ? "translateX(0%)" : `translateX(-${width})`,
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
    let classList = ["customDrawer"];
    if (open) {
      classList.push("customDrawer-open");
    }
    return classList.join(" ");
  }

  function getCount() {
    return document.querySelectorAll(".customDrawer-open").length;
  }

  function handlerClose() {
    onClose();
  }

  return drawer;
};

export default CustomDrawer;
