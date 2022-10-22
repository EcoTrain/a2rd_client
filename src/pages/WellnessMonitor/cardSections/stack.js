import React, {useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import {Layout} from "antd";
import "antd/dist/antd.min.css";

import {stackCardsInfo} from "./config/stack";

import "../../../components/CardPage/gridCard.scss";
import "../../../components/CardPage/lineGridCard.scss";

const WellnessStack = () => {
  const {t} = useTranslation("wellness");
  const pageRef = useRef();
  return (
    <Layout className="section section-white" id="wellnessStack" ref={pageRef}>
      <div className="section-content">
        <div className="section-title font-title-h1 text-center">
          {t("stack.title")}
        </div>
        <div
          className="gridCardsView fixRowDirection"
          style={{padding: "0 2em"}}
        >
          {stackCardsInfo.map((x, i) => renderCard(x, i, t))}
        </div>
      </div>
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

  const Icon = info.logo;

  return (
    <div
      key={i}
      className="gridCardWrapper"
      style={{flexBasis: "33%", minWidth: 150, minHeight: 150}}
      ref={cardRef}
      onMouseEnter={onHover}
      onMouseLeave={onUnHover}
    >
      <div className="gridCard">
        <div className="gridCardView">
          {!hover ? (
            <>
              <Icon
                style={{
                  maxWidth: 150,
                  maxHeight: 150,
                }}
              />
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
