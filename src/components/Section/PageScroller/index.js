import React, {useEffect, useRef} from "react";
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
      {children.map((elem, i) => (
        <Page key={i} index={i} t={t}>
          {elem}
        </Page>
      ))}
    </div>
  );
};

const Page = ({children, index, t}) => {
  Page.propTypes = {
    children: PropTypes.element,
    index: PropTypes.number,
  };

  const elemRef = useRef();
  const onScreen = useOnScreen({ref: elemRef});

  const getWrappedPage = () => {
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

  const wrappedChild = getWrappedPage();

  useEffect(() => {
    if (onScreen) {
      const title = children.props.title;
      document.title = title ? `A2RD Lab: ${t(title)}` : "A2RD Lab";
    }
  }, [onScreen]);

  return wrappedChild;
};

export const renderNextPageBtn = ({id}) => (
  <div
    className="nextPageBtn"
    onClick={() =>
      scroller.scrollTo(id, {duration: 500, smooth: "easeInQuint"})
    }
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

export default PageScroller;
