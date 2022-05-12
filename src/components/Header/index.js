import React, { useRef, useState } from "react";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { Menu } from "antd";
import "antd/dist/antd.min.css";

import { useScrollPosition } from "../../hooks/useScrollPosition";
import "./header.scss";

const Header = ({ items }) => {
  const headerRef = useRef();
  const [hide, setHide] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isHide = currPos.y < prevPos.y;
      if (isHide !== hide) setHide(isHide);
    },
    [hide]
  );

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollTo = (elemId) => {
    scroller.scrollTo(elemId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const headerBottomPadding = 10;
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
        <a href="/" className="headerLogo">
          <img src={require("../../static/images/logo_max.svg").default} />
        </a>
        <Menu
          className="headerMenu"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          onSelect={(elem) => {
            console.log({ elem });
            scrollTo(elem.key);
          }}
        />
      </div>
    </div>
  );
};

export default Header;
