import React, { useEffect, useRef, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { scroller } from "react-scroll";
import { Menu } from "antd";
import "antd/dist/antd.min.css";

import { ThemeContext, themes } from "../../contexts/Theme/ThemeContext";
import Toggle from "../Toggle";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import "./header.scss";

import { ReactComponent as LogoMin } from "../../assets/logo_min.svg";
import { ReactComponent as LogoMax } from "../../assets/logo_max.svg";

const LngSelector = () => {
  const { t, i18n } = useTranslation();

  const onSelect = (e) => {
    console.log("lng change", e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select className={"lngSelector"} onChange={onSelect} value={i18n.language}>
      {Object.entries(i18n.options.lngSelectOptions).map((x, i) => (
        <option key={i} value={x[0]}>
          {x[1]}
        </option>
      ))}
    </select>
  );
};

const Header = () => {
  const { t } = useTranslation();
  const headerBottomPadding = 10;

  const headerRef = useRef();
  const [hide, setHide] = useState(false);
  const [isNarrow, setNarrow] = useState(window.innerWidth < 960);
  const { theme, setTheme } = useContext(ThemeContext);

  const items = [
    {
      key: `/`,
      label: t("pages.about"),
      children: [
        { key: "/homeAbout", label: t("pages.main") },
        { key: "/homeProjects", label: t("pages.projects") },
        { key: "/homeStartups", label: t("pages.startups") },
        { key: "/homePublications", label: t("pages.publications") },
        { key: "/homeContacts", label: t("pages.contacts") },
      ],
    },
    { key: `/projects/`, label: t("pages.projects") },
    { key: `/startups/`, label: t("pages.startups") },
  ];

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
        <a href={`/`} className="headerLogo" target={"_self"}>
          {isNarrow ? <LogoMin /> : <LogoMax />}
        </a>
        <div className="headerActions">
          <Menu
            className="headerMenu"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
            onClick={(elem) => {
              // console.log({ elem });
              const oldPaths = window.location.pathname.split("/");
              const oldURL = oldPaths.slice(0, -1).join("/");

              const newPaths = elem.key.split("/");
              const newURL = newPaths.slice(0, -1).join("/");

              if (oldURL == newURL) {
                scroller.scrollTo(newPaths.slice(-1)[0], {
                  duration: 1000,
                  smooth: "easeInQuint",
                });
              } else window.location.href = elem.key;
            }}
          />
          <Toggle
            onChange={() => {
              if (theme === themes.light) setTheme(themes.dark);
              if (theme === themes.dark) setTheme(themes.light);
            }}
            value={theme === themes.dark}
          />
          {/* <LngSelector /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
