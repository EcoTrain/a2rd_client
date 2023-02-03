import React, {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import {scroller} from "react-scroll";
import TweenOne from "rc-tween-one";
import {DownOutlined} from "@ant-design/icons";

import useOnScreen from "../../../hooks/useOnScreen";

import "../sections.scss";
import "./scroll.scss";

const PageScroller = ({children, t}) => {
  PageScroller.propTypes = {
    children: PropTypes.array,
  };

  return (
    <div className="sectionPageScroller">
      {Array.isArray(children) ? (
        children.map((elem, i) => (
          <Page key={i} index={i} t={t}>
            {elem}
          </Page>
        ))
      ) : (
        <Page t={t}>{children}</Page>
      )}
    </div>
  );
};

const Page = ({children, index = 0, t}) => {
  Page.propTypes = {
    children: PropTypes.element,
    index: PropTypes.number,
  };

  const elemRef = useRef();
  const onScreen = useOnScreen({ref: elemRef});

  useEffect(() => {
    if (onScreen) {
      const title = children.props.title;
      document.title = title ? `A2RD Lab: ${t(title)}` : "A2RD Lab";
      // if (title) {
      //   document.title = `A2RD Lab: ${t(title)}`;
      // }
    }
  }, [onScreen]);

  return (
    <div
      id={`section${index}`}
      className={"sectionPage"}
      ref={elemRef}
      style={{
        position: children.props.position || "relative",
      }}
    >
      {children}
    </div>
  );
};

export const renderNextPageBtn = ({id}) => {
  const defaultOpacity = 1;
  const [opacity, setOpacity] = useState(defaultOpacity);

  // Opacity observer
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setOpacity(defaultOpacity - (position / window.screen.height) * 2);
    };
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="nextPageBtn"
      onClick={() =>
        scroller.scrollTo(id, {duration: 1000, smooth: "easeInQuint"})
      }
      style={{opacity: opacity}}
    >
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
    </div>
  );
};

export default PageScroller;
