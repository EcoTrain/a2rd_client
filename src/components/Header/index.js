import React, { useEffect, useRef, useState } from "react";
// import { animateScroll as scroll, scroller } from "react-scroll";
import { Menu } from "antd";
import "antd/dist/antd.min.css";

import { useScrollPosition } from "../../hooks/useScrollPosition";
import "./header.scss";

const Header = () => {
  const headerBottomPadding = 11;
  const logoMax = process.env.PUBLIC_URL + "/static/images/logo_max.svg";
  const logoMin = process.env.PUBLIC_URL + "/static/images/logo_min.svg";

  const headerRef = useRef();
  const [hide, setHide] = useState(false);
  const [logo, setLogo] = useState(
    window.screen.width < 920 ? logoMin : logoMax
  );

  const items = [
    { url: `${process.env.REACT_APP_URL}/`, label: "About Us" },
    { url: `${process.env.REACT_APP_URL}/projects/`, label: "Projects" },
    { url: `${process.env.REACT_APP_URL}/startups/`, label: "Startups" },
  ].map((item) => ({
    key: `${item.url}`,
    label: `${item.label}`,
  }));

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isHide = currPos.y < prevPos.y;
      if (isHide !== hide) setHide(isHide);
    },
    [hide]
  );

  const handleResize = () => {
    setLogo(window.innerWidth < 920 ? logoMin : logoMax);
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
          <img src={logo} />
        </a>
        <Menu
          className="headerMenu"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          onSelect={(elem) => {
            window.location.href = elem.key;
          }}
        />
      </div>
    </div>
  );
};

export default Header;
