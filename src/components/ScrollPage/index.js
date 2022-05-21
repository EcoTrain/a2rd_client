import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll/modules";
import TweenOne from "rc-tween-one";
import { DownOutlined } from "@ant-design/icons";

import "antd/dist/antd.min.css";
import useOnScreen from "../../hooks/useOnScreen";

import "./sections.scss";
import "./scroll.scss";

const PageScroller = ({ children }) => {
  PageScroller.propTypes = {
    children: PropTypes.array,
  };

  // Add section marginTop on overflow content
  // 50 = Header height (px)
  useEffect(() => {
    const handleResize = () => {
      document.querySelectorAll(".section-content-text").forEach((el) => {
        if (el.scrollHeight > el.clientHeight - 50) {
          console.log("Found the worst element ever: ", el);
          el.style.margin = "60px 0 0 0";
        } else el.style.marginTop = 0;
      });
    };
    window.addEventListener("resize", handleResize);
    return window.addEventListener("resize", null);
  }, []);

  return (
    <div className="sectionPageScroller">
      {children.map((elem, i) => (
        <Page key={i} index={i}>
          {elem}
        </Page>
      ))}
    </div>
  );
};

const Page = ({ children, index }) => {
  Page.propTypes = {
    children: PropTypes.element,
    index: PropTypes.number,
  };

  const elemRef = useRef();
  const onScreen = useOnScreen({ ref: elemRef });

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
      document.title = title ? `A2RD Lab: ${title}` : "A2RD Lab";
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
