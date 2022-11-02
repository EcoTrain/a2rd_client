import React, {useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";



import {startupsCardsInfo} from "./cardsConfig";

import "../../../components/CardPage/gridCard.scss";
import "../../../components/CardPage/lineGridCard.scss";

const HomeStartups = () => {
  const {t} = useTranslation("startups");
  return (
    <section className="section section-white" id="homeStartups">
      <div className="section-content">
        <div className="section-title font-title-h1 text-center">
          {t("title")}
        </div>
        <div className="gridCardsView lineGridCardsViewRow">
          {startupsCardsInfo.map((x, i) => renderCard(x, i))}
        </div>
      </div>
    </section>
  );
};

const renderCard = (info, i) => {
  const {t} = useTranslation("startups");
  const cardRef = useRef();
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.transition = "all 0.2s ease-in-out";
    }
  }, [cardRef.current]);

  const onHover = () => {
    cardRef.current.style.background = "var(--darkWhite)";
    setHover(true);
  };

  const onUnHover = () => {
    cardRef.current.style.background = null;
    setHover(false);
  };

  return (
    <div
      key={i}
      className="gridCardWrapper lineGridCardWrapper"
      ref={cardRef}
      onMouseEnter={onHover}
      onMouseLeave={onUnHover}
    >
      <div className="gridCard lineGridCard">
        <div className="gridCardView">
          <div className="gridCardViewTitle font-title-h3 text-center ">
            {t(info.title)}
          </div>
          {hover ? (
            <div className="description">{t(info.shortText)}</div>
          ) : (
            <div className="text-center">{t(info.previewText)}</div>
          )}
          {hover && (
            <div className="btnListWrapper">
              {(!info.links || !info.links.businessCard) && (
                <button
                  className="btn-outline btn-anim"
                  onClick={() => window.open(`/startups/${info.id}`, "_blank")}
                >
                  {t("links.readMore")}
                </button>
              )}
              {info.links &&
                Object.values(info.links).map((x, i) => (
                  <button
                    key={i}
                    className="btn-outline btn-anim"
                    onClick={() => window.open(x.link, "_blank")}
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

export default HomeStartups;
