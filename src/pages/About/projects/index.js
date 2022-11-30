import React, {useEffect, useRef, useState} from "react";
import TextyAnim from "rc-texty";
import ScrollAnim from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import {useTranslation} from "react-i18next";

import ProjectScroller from "./projectsPageScroller";
import {splitTextByWords} from "../../../fucntions/splitText";
import CustomDrawer from "../../../components/Modal/Drawer";
import projectsCardsInfo from "./config";

import "../../../components/CardPage/gridCard.scss";
import "../../../components/CardPage/lineGridCard.scss";
import "./index.scss";

const ScrollOverPack = ScrollAnim.OverPack;

const Projects = ({filter, text}) => {
  const {t} = useTranslation("projects");
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setActiveIndex(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [activeIndex]);

  return (
    <section className="section section-darkWhite" id="projects">
      <div className="section-content" style={{height: "100%"}}>
        <ScrollOverPack
          className="section-title font-size-2 font-title text-align-center"
          replay
          always={false}
          playScale={0.2}
        >
          <TweenOne animation={{opacity: 1}} style={{opacity: 0.001}}>
            {t("title")}
          </TweenOne>
        </ScrollOverPack>
        <ScrollOverPack replay always={false} playScale={0.2}>
          <TextyAnim
            type="mask-top"
            split={splitTextByWords}
            interval={10}
            className="description"
            style={{margin: "0 1em", maxWidth: 900}}
          >
            {text || t("label")}
          </TextyAnim>
        </ScrollOverPack>
        <div className="gridCardsView">
          {projectsCardsInfo.map(
            (x, i) =>
              (!filter || (filter && x[filter])) && (
                <ProjectItem
                  key={i}
                  i={i}
                  info={x}
                  onClick={() => setActiveIndex(i)}
                />
              )
          )}
        </div>

        <CustomDrawer open={activeIndex != null}>
          {activeIndex != null && (
            <ProjectScroller
              activeIndex={activeIndex}
              close={() => setActiveIndex(null)}
              t={t}
            />
          )}
        </CustomDrawer>
      </div>
    </section>
  );
};

const ProjectItem = ({info, i, onClick}) => {
  const {t} = useTranslation("projects");
  const cardRef = useRef();

  const isMobile = window.innerWidth < 960;
  const bgGradient = [
    // "linear-gradient(var(--lightGrayTransparent), var(--lightGrayTransparent))",
    // "linear-gradient(var(--darkWhiteTransparent), var(--lightGrayTransparent))",
    "linear-gradient(var(--lightGrayTransparent), var(--darkWhiteTransparent))",
    // "linear-gradient(var(--grayTransparent), var(--grayTransparent))",
  ].join(",");
  const bg = `${bgGradient}, url(${
    isMobile ? info.image.min : info.image.src
  })  no-repeat center center / cover`;

  return (
    <ScrollOverPack
      key={i}
      className="gridCardWrapper"
      replay
      always={false}
      playScale={0.2}
      onClick={onClick}
    >
      <TweenOne
        className="gridCard"
        ref={cardRef}
        style={{opacity: 0.001, background: bg}}
        animation={{opacity: 1, duration: 1000}}
      >
        <div className="gridCardView">
          <div
            className="font-size-3 font-title"
            style={{marginBottom: "0.5rem"}}
          >
            {t(info.title)}
          </div>
          <div className="">{t(info.preview)}</div>
        </div>
      </TweenOne>
    </ScrollOverPack>
  );
};

export default Projects;
