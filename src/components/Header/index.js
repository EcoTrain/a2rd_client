import React, {useEffect, useRef, useState, useContext} from "react";
import {useTranslation} from "react-i18next";

import {ThemeContext, themes} from "../../contexts/ThemeContext";
import Toggle from "../Toggle";
import {useScrollPosition} from "../../hooks/useScrollPosition";
import "./header.scss";

import {ReactComponent as LogoMin} from "../../assets/logo_min.svg";
import {ReactComponent as LogoMax} from "../../assets/logo_max.svg";
import NavMenu from "./NavMenu";
import {HeaderContext} from "../../contexts/HeaderContext";

const LngSelector = () => {
  const {t, i18n} = useTranslation();

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
  const {t} = useTranslation();
  const {headerFixed, headerBackground, headerVisible, setHeaderVisible} =
    useContext(HeaderContext);

  const visibilityTimer = useRef();
  const headerWrapperRef = useRef();
  const headerRef = useRef();

  const [isNarrow, setNarrow] = useState(window.innerWidth < 960);
  const {theme, setTheme} = useContext(ThemeContext);

  const hideDelay = 3000;
  const headerHeight = headerRef.current ? headerRef.current.clientHeight : 0;

  useEffect(() => {
    if (window.scrollY > headerHeight) {
      setTimer();
    }
  }, []);

  const setTimer = () => {
    if (!headerFixed && window.pageYOffset > headerHeight) {
      if (visibilityTimer.current) stopTimer();
      const _timer = setTimeout(() => {
        setHeaderVisible(false);
      }, hideDelay);
      visibilityTimer.current = _timer;
    }
  };
  const stopTimer = () => {
    clearTimeout(visibilityTimer.current);
  };

  useScrollPosition({
    effect: ({prevPos, currPos}) => {
      const isScrollUp = currPos.y > prevPos.y;
      if (isScrollUp && -currPos.y < headerHeight) {
        setHeaderVisible(true);
      } else if (!isScrollUp && -currPos.y > headerHeight) {
        setHeaderVisible(false);
        stopTimer();
      }
    },
    deps: [headerVisible],
  });

  useEffect(() => {
    const handleResize = () => {
      setNarrow(window.innerWidth < 960);
    };
    window.addEventListener("resize", handleResize);
    return window.addEventListener("resize", null);
  }, []);

  return (
    <div
      ref={headerWrapperRef}
      className="headerWraper"
      style={{
        transform: headerVisible
          ? "translateY(0%)"
          : `translateY(${-headerHeight}px)`,
      }}
      onMouseEnter={() => {
        headerWrapperRef.current.style.transform = `translateY(0%))`;
        setHeaderVisible(true);
        stopTimer();
      }}
      onMouseLeave={() => setTimer()}
    >
      <div
        ref={headerRef}
        className="header"
        style={{background: headerBackground}}
      >
        <div className="headerLogo">
          <a href={`/`} target={"_self"} aria-label={t("navHeader.about")}>
            {isNarrow ? <LogoMin /> : <LogoMax />}
          </a>
        </div>
        <div className="headerActions">
          <NavMenu />
          <Toggle
            className="themeToggler"
            onChange={() => {
              if (theme === themes.light) setTheme(themes.dark);
              if (theme === themes.dark) setTheme(themes.light);
            }}
            value={theme === themes.dark}
          />
        </div>
      </div>
      <div className="headerActivateArea"></div>
    </div>
  );
};

export default Header;
