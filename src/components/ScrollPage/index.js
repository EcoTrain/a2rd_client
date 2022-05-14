import React, { useEffect, useRef } from "react";
import { animateScroll as scroll, scroller } from "react-scroll";

import "antd/dist/antd.min.css";
import useOnScreen from "../../hooks/useOnScreen";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const PageScroller = ({ children }) => {
  const scrollDirection = useRef();

  useScrollPosition(({ prevPos, currPos }) => {
    const isScrollUp = currPos.y > prevPos.y;
    scrollDirection.current = isScrollUp ? "up" : "down";
  });

  const scrollDuration = 1000;
  const scrollTo = (elemId) => {
    scroller.scrollTo(elemId, {
      duration: scrollDuration,
      smooth: "easeOutQuint",
      isDynamic: true,
      //   ignoreCancelEvents: true,
    });
  };

  const onPageIntersectScreen = ({ elem }) => {
    if (scrollDirection.current == "up") {
      const pos = elem.ref.current.offsetTop;
      scrollTo(elem.props.id);
    } else if (scrollDirection.current == "down") {
      scrollTo(elem.props.id);
    }
  };

  return (
    <div className="sectionListOverlay">
      {children.map((elem, i) => (
        <Page key={i} index={i} onIntersect={onPageIntersectScreen}>
          {elem}
        </Page>
      ))}
    </div>
  );
};

const Page = ({ children, index, onIntersect }) => {
  const elemRef = useRef();
  const onScreen = useOnScreen({ ref: elemRef, rootMargin: "-100px" });

  const getWrappedPage = () => {
    return (
      <div
        id={`homeSection${index}`}
        className={"homePageSection"}
        ref={elemRef}
      >
        {children}
      </div>
    );
  };

  const wrappedChild = getWrappedPage();

  useEffect(() => {
    if (onScreen) {
      const elem = wrappedChild;
      onIntersect({ elem });
    }
  }, [onScreen]);

  return wrappedChild;
};

export default PageScroller;
