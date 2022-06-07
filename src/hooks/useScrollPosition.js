import { useRef, useLayoutEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

const isBrowser = typeof window !== `undefined`;

function getScrollPosition({ element, useWindow }) {
  if (!isBrowser) return { x: 0, y: 0 };

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top };
}

export function useScrollPosition({ effect, deps, element, useWindow, wait }) {
  const position = useRef(getScrollPosition({ useWindow }));

  let throttleTimeout = null;

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, deps);
}

// Not working. Needs to be improved 
export function useSmoothScroll() {
  const [lastScrollTime, setLastScrollTime] = useState(new Date());
  const [scrollPos, setScrollPos] = useState();

  const handleScroll = () => {
    const newScrollTime = new Date();
    if (newScrollTime - lastScrollTime > 100) smoothScroll();
  };

  const smoothScroll = () => {
    const newScrollTime = new Date();
    const scrollDistance = 50;
    var st = window.scrollY;

    var newPos = st;
    if (st > scrollPos) {
      newPos = st + scrollDistance;
    } else {
      newPos = st - scrollDistance;
    }
    scroll.scrollTo(newPos, {
      duration: 300,
      smooth: "easeOutQuint",
      // ignoreCancelEvents: true,
    });
    setLastScrollTime(newScrollTime);
    setScrollPos(st);
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
}
