import React, { useRef, useState } from "react";
// import { animateScroll as scroll, scroller } from "react-scroll";
import { Menu } from "antd";
import "antd/dist/antd.min.css";

import { useScrollPosition } from "../../hooks/useScrollPosition";
import "./header.scss";

const Header = () => {
  const headerRef = useRef();
  const [hide, setHide] = useState(false);

  const items = [
    { url: "/", label: "About Us" },
    { url: "/projects", label: "Projects" },
    { url: "/startups", label: "Startups" },
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

  const scrollTo = (elemId) => {
    // scroller.scrollTo(elemId, {
    //   duration: 900,
    //   delay: 0,
    //   smooth: "easeInOutQuart",
    // });
  };

  const headerBottomPadding = 11;
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
        <a href="/" className="headerLogo" target={"_self"}>
          <img src={process.env.PUBLIC_URL + "/static/images/logo_max.svg"} />
        </a>
        <Menu
          className="headerMenu"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          onSelect={(elem) => {
            console.log({ elem });
            // scrollTo(elem.key);
            window.location.href = elem.key;
          }}
        />
      </div>
    </div>
  );
};

export default Header;
