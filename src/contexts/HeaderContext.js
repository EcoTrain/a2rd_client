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

  const [fixed, setFixed] = useState(false);
  const [background, setBackground] = useState("var(--lightGrayTransparent)");

  const contextValues = {
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
