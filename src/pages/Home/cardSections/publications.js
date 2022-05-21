import React, { useRef, useState } from "react";
import ScrollAnim from "rc-scroll-anim";
import { useTranslation } from "react-i18next";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import { publicationsCardsInfo } from "./cardsConfig";

import "./gridCard.scss";
import "./lineGridCard.scss";

const ScrollOverPack = ScrollAnim.OverPack;

const HomePublications = () => {
  const { t } = useTranslation("publications");
  const pageRef = useRef();
  return (
    <Layout
      className="section section-darkWhite"
      id="homePublications"
      ref={pageRef}
    >
      <ScrollOverPack
        replay
        always={false}
        playScale={0}
        // className="section-content"
        style={{ flexDirection: "column" }}
      >
        <div className="font-title-h1 text-center" style={{ marginTop: "3em" }}>
          {t("publications.title")}
        </div>
        <div className="text-center" style={{ margin: "0px 2em" }}>
          {t("publications.label")}
        </div>
        <div className="gridCardsView lineGridCardsViewColumn">
          {publicationsCardsInfo.map((x, i) => renderCard(x, i))}
        </div>
      </ScrollOverPack>
    </Layout>
  );
};

const renderCard = (info, i) => {
  const { t } = useTranslation("publications");
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
      onMouseLeave={onUnHover}
    >
      <div className="gridCard lineGridCard" onMouseEnter={onHover}>
        <div className="lineGridCardIcon">
          <a href={info.icon.link} target="_blank" rel="noreferrer">
            <img src={info.icon.src} alt={info.icon.alt}/>
          </a>
        </div>

        <div className="gridCardView lineGridViewLeft">
          <div className="font-title-h3" style={{ textAlign: "left" }}>
            {t(info.title)}
          </div>
          {hover && (
            <div className="gridCardViewLinkBtns">
              {info.links &&
                info.links.map((x, i) => (
                  <button
                    key={i}
                    className="gridCardViewLinkBtn"
                    onClick={() => (window.location.href = x.link)}
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

export default HomePublications;
