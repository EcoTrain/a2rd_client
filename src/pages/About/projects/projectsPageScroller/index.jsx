import React, {useEffect, useRef} from "react";
import TweenOne from "rc-tween-one";
import BannerAnim, {Element} from "rc-banner-anim";
import "rc-banner-anim/assets/index.css";

import projectsCardsInfo from "../config";

import "./index.scss";

const BgElement = Element.BgElement;

const ProjectScroller = ({activeIndex, close, t}) => {
  const bannerRef = useRef();
  const bgGradient = [
    "linear-gradient(var(--darkWhiteTransparent), var(--darkWhiteTransparent))",
  ].join(",");

  useEffect(() => {
    const handleKeypress = (event) => {
      // Arrow left
      if (event.keyCode === 37) {
        bannerRef.current.prev();
      }
      // Arrow right
      else if (event.keyCode === 39) {
        bannerRef.current.next();
      }
    };
    window.addEventListener("keydown", handleKeypress);
    return () => {
      window.removeEventListener("keydown", handleKeypress);
    };
  }, [activeIndex]);

  return (
    <BannerAnim
      ref={bannerRef}
      type="across"
      initShow={activeIndex}
      style={{height: "100vh"}}
      className={"projectScroller"}
    >
      {projectsCardsInfo.map((x, i) => (
        <Element key={i} name={i}>
          <BgElement
            key={i}
            style={{
              backgroundImage: [
                bgGradient,
                x.image && `url(${x.image.src})`,
              ].join(","),
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              width: "100%",
              position: "absolute",
            }}
          />
          <ProjectCard info={x} close={close} t={t} />
        </Element>
      ))}
    </BannerAnim>
  );
};

const ProjectCard = ({info, close, t}) => {
  return (
    <section className="section section-fullscreen projectCard">
      <div className="section-content">
        <div className="projectCard-content">
          <div
            onClick={close}
            className="font-size-3 closeButton"
            style={{zIndex: 2}}
          >
            &#215;
          </div>
          <TweenOne
            className="projectCard-info"
            animation={{opacity: 1, duration: 300}}
            style={{opacity: 0.001}}
          >
            <div
              className="font-title font-size-2"
              style={{marginBottom: "1rem"}}
            >
              {t(info.title)}
            </div>
            <div className="font-size-3">{t(info.text)}</div>
            <div>{t(info.note)}</div>
          </TweenOne>
        </div>
      </div>
    </section>
  );
};

export default ProjectScroller;
