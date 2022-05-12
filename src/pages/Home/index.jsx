import React, { useEffect, useState, useRef } from "react";
import { animateScroll as scroll, scroller } from "react-scroll";

import "antd/dist/antd.min.css";
import HomePreview from "./preview";
import HomeAbout from "./about";
import Header from "../../components/Header";

import "./home.scss";
import useOnScreen from "../../hooks/useOnScreen";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Home = () => {
  const items = [
    { id: "homeSection", label: "Home" },
    { id: "homeAboutSection", label: "About" },
  ].map((item) => ({
    key: `${item.id}`,
    label: `${item.label}`,
  }));

  return (
    <div>
      <Header items={items} />
      <PageScroller id={"homeSection"}>
        <HomePreview id={"homePreviewSection"} />
        <HomeAbout id={"homeAboutSection"} />
        <HomeAbout />
        <HomeAbout />
      </PageScroller>
    </div>
  );
};

const PageScroller = ({ children }) => {
  const scrollDirection = useRef();

  useScrollPosition(({ prevPos, currPos }) => {
    const onScrollUp = currPos.y > prevPos.y;
    scrollDirection.current = onScrollUp ? "up" : "down";
  });

  const scrollTo = (elemId) => {
    scroller.scrollTo(elemId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const onPageIntersectScreen = ({ elem, id }) => {
    console.log("onPageIntersectScreen", elem);
    console.log("scrollDirection", scrollDirection);
    if (scrollDirection.current == "up") {
      // const pos = elem.ref.current.offsetTop + elem.ref.current.clientHeight;
      const pos = elem.ref.current.offsetTop;
      console.log("pos", pos);
      scrollTo(elem.props.children.props.id);
    } else {
      scrollTo(elem.props.children.props.id);
    }
  };

  return (
    <div className="sectionListOverlay">
      {children.map((elem, i) => (
        <Page key={i} onIntersect={onPageIntersectScreen}>
          {elem}
        </Page>
      ))}
    </div>
  );
};

const Page = ({ children, onIntersect }) => {
  const elemRef = useRef();
  const onScreen = useOnScreen(elemRef);

  const getWrappedPage = () => {
    return <div ref={elemRef}>{children}</div>;
  };

  useEffect(() => {
    if (onScreen) {
      console.log("onScreen", children);
      const elem = getWrappedPage();
      onIntersect({ elem, id: elem.props.children.props.id });
    }
  }, [onScreen]);

  return getWrappedPage();
};

export default Home;
