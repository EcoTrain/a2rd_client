import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll/modules";
import { scroller } from "react-scroll";
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

  useScrollPosition(({ prevPos, currPos }) => {
    const isScrollUp = currPos.y > prevPos.y;
    scrollDirection.current = isScrollUp ? "up" : "down";
  });

  const scrollDuration = 800;
  const scrollTo = (elemId) => {
    scroller.scrollTo(elemId, {
      duration: scrollDuration,
      smooth: "easeOutQuint",
      isDynamic: true,
      // ignoreCancelEvents: true,
    });
  };

  const onPageIntersectScreen = ({ elem }) => {
    if (scrollDirection.current === "up") {
      // const pos = elem.ref.current.offsetTop;
      scrollTo(elem.props.id);
    } else if (scrollDirection.current === "down") {
      scrollTo(elem.props.id);
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
      console.log("onScreen", elem);
      onIntersect({ elem });
    }
  }, [onScreen]);

  return wrappedChild;
};

export const renderNextPageBtn = ({id}) => (
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
