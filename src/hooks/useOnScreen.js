import React, { useState, useEffect } from "react";

const useOnScreen = ({ ref, rootMargin = "-10px" }) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTimeout(() => setIntersecting(entry.isIntersecting), 500);
      },
      {
        rootMargin,
        // threshold: [0, 0.2, 0.5, 0.8, 1],
      }
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
