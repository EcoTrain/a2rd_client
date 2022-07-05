import React, { useRef, useState } from "react";
import ScrollAnim from "rc-scroll-anim";
import { useTranslation } from "react-i18next";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import { startupsCardsInfo } from "./cardsConfig";

import "./gridCard.scss";
import "./lineGridCard.scss";

const ScrollOverPack = ScrollAnim.OverPack;

const HomeStartups = () => {
  const { t } = useTranslation(["startups", "shared"]);
  const pageRef = useRef();
  return (
    <Layout className="section section-white" id="homeStartups" ref={pageRef}>
      <ScrollOverPack
        replay
        always={false}
        playScale={0}
        className="section-content"
        style={{ flexDirection: "column" }}
      >
        <div
          className="section-title font-title-h1 text-center"
          style={{ marginTop: "2em" }}
        >
          {t("startups.title")}
        </div>
        <div className="gridCardsView lineGridCardsViewRow">
          {startupsCardsInfo.map((x, i) => renderCard(x, i))}
        </div>
      </ScrollOverPack>
    </Layout>
  );
};

const renderCard = (info, i) => {
  const { t } = useTranslation("startups");
  const cardRef = useRef();
  const [hover, setHover] = useState(false);

  const onHover = () => {
    if (cardRef.current) {
      cardRef.current.style.background = "var(--darkWhite)";
    }
    setHover(true);
  };

  const onUnHover = () => {
    if (cardRef.current) {
      cardRef.current.style.background = null;
    }
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
            <div className="description">{t(info.smallText)}</div>
          ) : (
            <div className="text-center">{t(info.previewText)}</div>
          )}
          {hover && (
            <div className="linkBtnListWrapper">
              <button
                className="linkBtn"
                onClick={() => (window.location.href = `/startups/${info.id}`)}
              >
                {t("links.readMore", { ns: "shared" })}
              </button>
              {info.links &&
                info.links.map((x, i) => (
                  <button
                    key={i}
                    className="linkBtn"
                    onClick={() => window.open(x.link, "_blank")}
                  >
                    {t(x.title, { ns: "shared" })}
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
