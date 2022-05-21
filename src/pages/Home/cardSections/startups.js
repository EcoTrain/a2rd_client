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
  const { t } = useTranslation("startups");
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
        <div className="font-title-h1 text-center" style={{ marginTop: "5%" }}>
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
      cardRef.current.style.background = info.bg;
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
          <div className="description">
            {hover ? t(info.smallText) : t(info.previewText)}
          </div>
          {hover && (
            <div className="gridCardViewLinkBtns">
              <button
                className="gridCardViewLinkBtn"
                onClick={() =>
                  (window.location.href = `${process.env.REACT_APP_URL}/startups/${info.id}`)
                }
              >
                Read more
              </button>
              {info.links &&
                info.links.map((x, i) => (
                  <button
                    key={i}
                    className="gridCardViewLinkBtn"
                    onClick={() => (window.location.href = x.link)}
                  >
                    {x.title}
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
