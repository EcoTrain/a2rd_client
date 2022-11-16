import React, {useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import "./index.scss";

const CustomModal = ({
  children, // Body element
  title = "", // Header element or text
  open = false, // Trigger to show/hide
  onClose = () => {}, // Callback on close modal
}) => {
  const [zCount, setCount] = useState(getCount());
  const [zClass, setClass] = useState(getClass());
  const [isOpen, setOpen] = useState(open);

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
      setClass(getClass());
      setCount(getCount());
    }
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
        <div className={`customModal ${zClass}`}>
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
    return `customDrawer_${getCount()}`;
  }

  function getCount() {
    return 9000 + document.querySelectorAll(".customModal").length + 1;
  }

  function handlerClose() {
    setOpen(false);
    onClose();
  }

  return modal;
};

export default CustomModal;
