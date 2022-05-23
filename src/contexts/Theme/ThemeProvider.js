import React from "react";
import PropTypes from "prop-types";
import { ThemeContext, themes } from "./ThemeContext";

const getTheme = () => {
  const theme = `${window?.localStorage?.getItem("theme")}`;
  if (Object.values(themes).includes(theme)) return theme;

  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (prefersDarkScheme.matches) {
    document.body.classList.add("dark-theme");
    return themes.dark;
  } else {
    document.body.classList.remove("dark-theme");
    return themes.light;
  }
};

const ThemeProvider = ({ children }) => {
  ThemeProvider.propTypes = {
    children: PropTypes.element,
  };

  const [theme, setTheme] = React.useState(getTheme);

  React.useEffect(() => {
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
