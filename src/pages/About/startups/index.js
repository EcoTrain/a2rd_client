import React, {useEffect, useRef, useState} from "react";
import ScrollAnim from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import {useTranslation} from "react-i18next";

import startupsCardsInfo from "./config";

import "../../../components/CardPage/gridCard.scss";
import "../../../components/CardPage/lineGridCard.scss";
import "./index.scss";
import CustomDrawer from "../../../components/Modal/Drawer";
import StartupScroller from "./startupsPageScroller";

const ScrollOverPack = ScrollAnim.OverPack;

const Startups = () => {
  const {t} = useTranslation("startups");
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
    <section className="section section-white" id="startups">
      <div className="section-content">
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
        <ScrollOverPack
          replay
          always={false}
          playScale={0.2}
          className="text-align-center"
          style={{marginBottom: "1rem", maxWidth: 700}}
        >
          <TweenOne animation={{opacity: 1}} style={{opacity: 0.001}}>
            We also implement our own start-up initiatives related to impact
            investments aimed at developing a sustainable society
          </TweenOne>
        </ScrollOverPack>
        <div className="gridCardsView lineGridCardsView">
          {startupsCardsInfo.map((x, i) => (
            <>
              <StartupItem
                key={i}
                i={i}
                info={x}
                onClick={() => setActiveIndex(i)}
              />
              {i != startupsCardsInfo.length - 1 && (
                <span className="spanLineDelim" />
              )}
            </>
          ))}
        </div>

        <CustomDrawer open={activeIndex != null}>
          {activeIndex != null && (
            <StartupScroller
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

const StartupItem = ({info, i, onClick}) => {
  const {t} = useTranslation("startups");
  const cardRef = useRef();
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onUnHover = () => {
    setHover(false);
  };

  return (
    <div
      key={i}
      className="gridCardWrapper lineGridCardWrapper"
      style={{transition: "all 0.2s ease-in-out"}}
      onMouseEnter={onHover}
      onMouseLeave={onUnHover}
      onClick={onClick}
    >
      <div ref={cardRef} className="gridCard lineGridCard">
        <div className="gridCardView">
          <div className="gridCardViewTitle font-size-3 font-title">
            {t(info.title)}
          </div>
          {hover ? (
            <div className="">{t(info.shortText)}</div>
          ) : (
            <div>{t(info.previewText)}</div>
          )}
          {hover && (
            <div className="btnListWrapper">
              {(!info.links || !info.links.businessCard) && (
                <button className="btn-outline btn-anim" onClick={onClick}>
                  {t("links.readMore")}
                </button>
              )}
              {info.links &&
                Object.values(info.links).map((x, i) => (
                  <button
                    key={i}
                    className="btn-outline btn-anim"
                    onClick={() => window.open(x.link)}
                  >
                    {t(x.title)}
                  </button>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Startups;
