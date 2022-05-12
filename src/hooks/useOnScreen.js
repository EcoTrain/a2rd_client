import React, { useState, useEffect } from "react";

const useOnScreen = ({ ref, rootMargin = "0px" }) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTimeout(() => setIntersecting(entry.isIntersecting), 200);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
};

export default useOnScreen;
