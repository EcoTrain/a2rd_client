import React, {createContext, useEffect, useState} from "react";
import PropTypes from "prop-types";

export const defaultValues = {
  headerHeight: 40,
  headerVisible: true,
  setHeaderVisible: () => {},
  headerFixed: false,
  setHeaderFixed: () => {},
  // headerBackground: "var(--lightGrayTransparent)",
  headerBackground: "var(--darkWhiteTransparent)",
  setHeaderBackground: () => {},
  dropHeaderBackground: () => {},
};

export const HeaderContext = createContext(defaultValues);

const HeaderProvider = ({children}) => {
  HeaderProvider.propTypes = {
    children: PropTypes.element,
  };

  const [visible, setVisible] = useState(true);
  const [fixed, setFixed] = useState(false);
  const [background, setBackground] = useState(defaultValues.headerBackground);

  useEffect(() => {
    if (fixed) {
      setVisible(true);
    }
  }, [fixed]);

  const contextValues = {
    headerHeight: 40,
    headerVisible: visible,
    setHeaderVisible: setVisible,
    headerFixed: fixed,
    setHeaderFixed: setFixed,
    headerBackground: background,
    setHeaderBackground: setBackground,
    dropHeaderBackground: () => setBackground(defaultValues.headerBackground),
  };

  return (
    <HeaderContext.Provider value={contextValues}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
