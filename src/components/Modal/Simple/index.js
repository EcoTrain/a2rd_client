import React, {useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import "./index.scss";

const CustomModal = ({
  children, // Body element
  title = "", // Header element or text
  open = false, // Trigger to show/hide
  onClose = () => {}, // Callback on close modal
}) => {
  const [isOpen, setOpen] = useState(open);
  const [zCount, setCount] = useState(getCount());
  const [classList, setClassList] = useState(getClass());

  const el = React.useMemo(() => document.createElement("div"), []);
  const modal = React.useMemo(() => ReactDOM.createPortal(getContent(), el));

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  useEffect(() => {
    if (open) {
      setCount(getCount());
      document.documentElement.style.overflow = "hidden";
    } else {
      const count = document.querySelectorAll(".customModal-open").length;
      if (count > 1) {
        document.documentElement.style.overflow = "unset";
      }
    }
    setClassList(getClass());
    setOpen(open);
  }, [open]);

  function getContent() {
    return (
      <div
        style={{
          visibility: isOpen ? "visible" : "hidden",
          zIndex: zCount,
        }}
      >
        <div className="customModal-overlay" onClick={handlerClose} />
        <div className={classList}>
          {title && (
            <div className="customModal-header">
              {
                <div
                  className="customModal-header-cross"
                  onClick={handlerClose}
                >
                  &#215;
                </div>
              }
              {title}
            </div>
          )}
          <div className="customModal-body">{children}</div>
        </div>
      </div>
    );
  }

  function getClass() {
    let classList = ["customModal", `customModal_${zCount}`];
    if (isOpen) {
      classList.push("customModal-open");
    }
    return classList.join(" ");
  }

  function getCount() {
    return 9000 + document.querySelectorAll(".customModal-open").length + 1;
  }

  function handlerClose() {
    setOpen(false);
    onClose();
  }

  return modal;
};

export default CustomModal;
