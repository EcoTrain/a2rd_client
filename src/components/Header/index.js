import React, { useEffect, useRef, useState, useContext } from "react";
// import { animateScroll as scroll, scroller } from "react-scroll";
import { Menu } from "antd";
import "antd/dist/antd.min.css";

import { ThemeContext, themes } from "../../contexts/Theme/ThemeContext";
import Toggle from "../Toggle";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import "./header.scss";

import { ReactComponent as LogoMin } from "../../assets/logo_min.svg";
import { ReactComponent as LogoMax } from "../../assets/logo_max.svg";

const Header = () => {
  const headerBottomPadding = 11;

  const headerRef = useRef();
  const [hide, setHide] = useState(false);
  const [isNarrow, setNarrow] = useState(window.innerWidth < 960);
  const { theme, setTheme } = useContext(ThemeContext);

  const items = [
    { url: `${process.env.REACT_APP_URL}/`, label: "About Us" },
    { url: `${process.env.REACT_APP_URL}/projects/`, label: "Projects" },
    { url: `${process.env.REACT_APP_URL}/startups/`, label: "Startups" },
  ].map((item) => ({
    key: `${item.url}`,
    label: `${item.label}`,
  }));

  useScrollPosition({
    effect: ({ prevPos, currPos }) => {
      const isHide = currPos.y < prevPos.y;
      if (isHide !== hide) setHide(isHide);
    },
    deps: [hide],
  });

  const handleResize = () => {
    setNarrow(window.innerWidth < 960);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return window.addEventListener("resize", null);
  }, []);

  return (
    <div
      ref={headerRef}
      className="headerWraper"
      style={{
        paddingBottom: headerBottomPadding,
        transform: hide
          ? `translateY(calc(-100% + ${headerBottomPadding}px))`
          : "translateY(0%)",
        transition: "transform 400ms ease-out",
      }}
      onMouseEnter={() => {
        if (hide) headerRef.current.style.transform = "translateY(0%)";
      }}
      onMouseLeave={() => {
        if (hide)
          headerRef.current.style.transform = `translateY(calc(-100% + ${headerBottomPadding}px))`;
      }}
    >
      <div className="header">
        <a
          href={`${process.env.REACT_APP_URL}/`}
          className="headerLogo"
          target={"_self"}
        >
          {isNarrow ? <LogoMin /> : <LogoMax />}
        </a>
        <div className="headerActions">
          <Menu
            className="headerMenu"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
            onSelect={(elem) => {
              window.location.href = elem.key;
            }}
          />
          <Toggle
            onChange={() => {
              if (theme === themes.light) setTheme(themes.dark);
              if (theme === themes.dark) setTheme(themes.light);
            }}
            value={theme === themes.dark}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
