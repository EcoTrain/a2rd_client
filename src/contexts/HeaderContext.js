import React, {createContext, useEffect, useState} from "react";
import PropTypes from "prop-types";

export const defaultValues = {
  fixed: false,
  setFixed: () => {},
  background: "var(--lightGrayTransparent)",
  setBackground: () => {},
};

export const HeaderContext = createContext(defaultValues);

const HeaderProvider = ({children}) => {
  HeaderProvider.propTypes = {
    children: PropTypes.element,
  };

  const [visible, setVisible] = useState(true);
  const [fixed, setFixed] = useState(false);
  const [background, setBackground] = useState("var(--lightGrayTransparent)");

  useEffect(() => {
    if (fixed) {
      setVisible(true);
    }
  }, [fixed]);

  const contextValues = {
    headerVisible: visible,
    setHeaderVisible: setVisible,
    headerFixed: fixed,
    setHeaderFixed: setFixed,
    headerBackground: background,
    setHeaderBackground: setBackground,
    dropHeaderBackground: () => setBackground("var(--lightGrayTransparent)"),
  };

  return (
    <HeaderContext.Provider value={contextValues}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
