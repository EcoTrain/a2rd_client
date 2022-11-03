import React, {useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import "./index.scss";

const CustomModal = ({
  children, // Body element
  title = "", // Header element or text
  open = false, // Trigger to show/hide
  headerShown = true,
  onClose = () => {}, // Callback on close modal
  width,
}) => {
  const el = React.useMemo(() => document.createElement("div"), []);

  const [zCount, setCount] = useState(getCount());
  const [zClass, setClass] = useState(getClass());
  const [isOpen, setOpen] = useState(open);

  function getClass() {
    return `customDrawer_${getCount()}`;
  }
  function getCount() {
    return 9000 + document.querySelectorAll(".customModal").length + 1;
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
    }
    setOpen(open);
  }, [open]);

  const handlerClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    isOpen &&
    ReactDOM.createPortal(
      <>
        <div className="customModal-overlay" onClick={handlerClose}></div>
        <div
          className={`customModal ${zClass}`}
          style={{
            width,
            zIndex: zCount,
          }}
        >
          {headerShown && (
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
      </>,
      el
    )
  );
};

export default CustomModal;
