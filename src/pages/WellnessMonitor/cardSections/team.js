import React, {useRef, useState} from "react";
import ScrollAnim from "rc-scroll-anim";
import {useTranslation} from "react-i18next";
import {Layout} from "antd";
import "antd/dist/antd.min.css";

import {developersCardsInfo} from "./config/team";

import "../../../components/CardPage/gridCard.scss";
import "../../../components/CardPage/lineGridCard.scss";

const ScrollOverPack = ScrollAnim.OverPack;

const WellnessTeam = () => {
  const {t} = useTranslation("wellness");
  const pageRef = useRef();
  return (
    <Layout className="section section-white" id="wellnessTeam" ref={pageRef}>
      <ScrollOverPack
        replay
        always={false}
        playScale={0}
        className="section-content"
      >
        <div className="section-title font-title-h1 text-center">
          {t("team.title")}
        </div>
        <div
          className="gridCardsView fixRowDirection"
          style={{padding: "0 2em"}}
        >
          {developersCardsInfo.map((x, i) => renderCard(x, i, t))}
        </div>
      </ScrollOverPack>
    </Layout>
  );
};

const renderCard = (info, i, t) => {
  return (
    <div
      key={i}
      className="gridCardWrapper"
      style={{flexBasis: "33%", minWidth: 150, minHeight: 150}}
    >
      <div
        className="gridCard"
        style={{
          alignItems: "flex-start",
        }}
      >
        <div className="gridCardView">
          <img
            src={info.logo}
            style={{width: "100%", maxWidth: 150, borderRadius: "50%"}}
          />
          <div
            className="gridCardViewTitle font-title-h3 text-center"
            style={{marginTop: "1em", marginBottom: 0}}
          >
            {t(info.title)}
          </div>
          <div className="text-center">{t(info.previewText)}</div>
        </div>
      </div>
    </div>
  );
};

export default WellnessTeam;
