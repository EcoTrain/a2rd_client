import React, {useRef, useState} from "react";
import ScrollAnim from "rc-scroll-anim";
import {useTranslation} from "react-i18next";
import {Layout} from "antd";
import "antd/dist/antd.min.css";

import {stackCardsInfo} from "./cardsConfig";

import "../../../components/CardPage/gridCard.scss";
import "../../../components/CardPage/lineGridCard.scss";

const ScrollOverPack = ScrollAnim.OverPack;

const WellnessStack = () => {
  const {t} = useTranslation("wellness");
  const pageRef = useRef();
  return (
    <Layout className="section section-white" id="wellnessStack" ref={pageRef}>
      <ScrollOverPack
        replay
        always={false}
        playScale={0}
        className="section-content"
      >
        <div className="section-title font-title-h1 text-center">
          {t("stack.title")}
        </div>
        <div className="gridCardsView fixRowDirection">
          {stackCardsInfo.map((x, i) => renderCard(x, i, t))}
        </div>
      </ScrollOverPack>
    </Layout>
  );
};

const renderCard = (info, i, t) => {
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

  const getTitle = () => (
    <div className="gridCardViewTitle font-title-h3 text-center ">
      {t(info.title)}
    </div>
  );

  return (
    <div
      key={i}
      className="gridCardWrapper"
      style={{flexBasis: "33%", minWidth: 200, minHeight: 200}}
      ref={cardRef}
      onMouseEnter={onHover}
      onMouseLeave={onUnHover}
    >
      <div className="gridCard">
        <div className="gridCardView">
          {!hover ? (
            <>
              <img src={info.logo} style={{width: "100%", maxWidth: 100}} />{" "}
              {getTitle()}
            </>
          ) : (
            <>
              {getTitle()}
              <div className="text-center">{t(info.text)}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WellnessStack;
