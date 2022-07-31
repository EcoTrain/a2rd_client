import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const themes = {
  dark: "dark",
  light: "light",
};

export const ThemeContext = createContext({});

const getTheme = () => {
  const theme = `${window?.localStorage?.getItem("theme")}`;
  if (Object.values(themes).includes(theme)) return theme;

  const userMedia = window.matchMedia("(prefers-color-scheme: light)");
  if (userMedia.matches) return themes.light;
  else return themes.dark;
};

const ThemeProvider = ({ children }) => {
  ThemeProvider.propTypes = {
    children: PropTypes.element,
  };

  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
