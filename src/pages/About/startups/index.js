import React, {useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";

import startupsCardsInfo from "./config";

import "../../../components/CardPage/gridCard.scss";
import "../../../components/CardPage/lineGridCard.scss";
import "./index.scss";
import CustomDrawer from "../../../components/Modal/Drawer";
import StartupScroller from "./startupsPageScroller";

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
        <div className="section-title font-size-2 font-title text-align-center">
          {t("title")}
        </div>
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
