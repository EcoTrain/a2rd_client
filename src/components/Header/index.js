import React, { useEffect, useRef, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Menu } from "antd";
import "antd/dist/antd.min.css";

import { ThemeContext, themes } from "../../contexts/Theme/ThemeContext";
import Toggle from "../Toggle";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import "./header.scss";

import { ReactComponent as LogoMin } from "../../assets/logo_min.svg";
import { ReactComponent as LogoMax } from "../../assets/logo_max.svg";

const Header = () => {
  const { t } = useTranslation();
  const headerBottomPadding = 11;

  const headerRef = useRef();
  const [hide, setHide] = useState(false);
  const [isNarrow, setNarrow] = useState(window.innerWidth < 960);
  const { theme, setTheme } = useContext(ThemeContext);

  const items = [
    { url: `${process.env.REACT_APP_URL}/`, label: t("pages.about") },
    {
      url: `${process.env.REACT_APP_URL}/projects/`,
      label: t("pages.projects"),
    },
    {
      url: `${process.env.REACT_APP_URL}/startups/`,
      label: t("pages.startups"),
    },
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

    // Add section marginTop on overflow content
    // 60 = Header height (px)
    document.querySelectorAll(".section-content").forEach((el) => {
      if (el.scrollHeight > el.clientHeight - 70) {
        // console.log("Found the worst element ever: ", el);
        el.style.paddingTop = "50px";
      } else el.style.paddingTop = 0;
    });
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
