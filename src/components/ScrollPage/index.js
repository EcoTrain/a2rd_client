import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll/modules";
import { animateScroll as scroll, scroller } from "react-scroll";
import TweenOne from "rc-tween-one";
import { DownOutlined } from "@ant-design/icons";

import "antd/dist/antd.min.css";
import useOnScreen from "../../hooks/useOnScreen";
import { useScrollPosition } from "../../hooks/useScrollPosition";

import "./scroll.scss";

const PageScroller = ({ children }) => {
  PageScroller.propTypes = {
    children: PropTypes.array,
  };

  const scrollDirection = useRef();
  const scrollDuration = 900;

  useScrollPosition(({ prevPos, currPos }) => {
    const isScrollUp = currPos.y > prevPos.y;
    scrollDirection.current = isScrollUp ? "up" : "down";
  });

  const onPageIntersectScreen = ({ elem }) => {
    const scrollY = elem.ref.current.offsetTop;
    const elemHeight = elem.ref.current.offsetHeight;
    const windowHeight = window.innerHeight;
    const elemTopPos = scrollY;
    const elemBottomPos = scrollY + elemHeight - windowHeight;
    if (scrollDirection.current === "up") {
      scroll.scrollTo(elemBottomPos, {
        duration: scrollDuration,
        smooth: "easeOutQuint",
        ignoreCancelEvents: true,
      });
    } else if (scrollDirection.current === "down") {
      scroller.scrollTo(elemTopPos, {
        duration: scrollDuration,
        smooth: "easeOutQuint",
        ignoreCancelEvents: true,
      });
    }
  };

  return (
    <div className="sectionPageScroller">
      {children.map((elem, i) => (
        <Page key={i} index={i} onIntersect={onPageIntersectScreen}>
          {elem}
        </Page>
      ))}
    </div>
  );
};

const Page = ({ children, index, onIntersect }) => {
  Page.propTypes = {
    children: PropTypes.element,
    index: PropTypes.number,
    onIntersect: PropTypes.func,
  };

  const elemRef = useRef();
  const onScreen = useOnScreen({ ref: elemRef, rootMargin: "-100px" });

  const getWrappedPage = () => {
    return (
      <div
        id={`section${index}`}
        className={"sectionPage"}
        ref={elemRef}
        style={children.props.sticky && { position: "sticky" }}
      >
        {children}
      </div>
    );
  };

  const wrappedChild = getWrappedPage();

  useEffect(() => {
    if (onScreen) {
      const elem = wrappedChild;
      // console.log("onScreen", elem);
      onIntersect({ elem });
    }
  }, [onScreen]);

  return wrappedChild;
};

export const renderNextPageBtn = ({ id }) => (
  <Link className="nextPageBtn" to={id} smooth={true} duration={500}>
    <TweenOne
      className="nextPageBtnContent"
      animation={{
        y: "-=20",
        yoyo: true,
        repeat: -1,
        duration: 1000,
      }}
      key="icon"
    >
      <DownOutlined />
    </TweenOne>
  </Link>
);

export default PageScroller;
