import React, {useRef, useState} from "react";
import ScrollAnim from "rc-scroll-anim";
import {useTranslation} from "react-i18next";
import {Layout} from "antd";
import "antd/dist/antd.min.css";

import {functionalCardsInfo} from "./cardsConfig";

import "../../../components/CardPage/gridCard.scss";
import "../../../components/CardPage/lineGridCard.scss";

const ScrollOverPack = ScrollAnim.OverPack;

const WellnessFunctional = () => {
  const {t} = useTranslation("wellness");
  return (
    <Layout className="section section-darkWhite" id="wellnessFunctional">
      <ScrollOverPack
        replay
        always={false}
        playScale={0}
        className="section-content"
        style={{height: "100%"}}
      >
        <div
          className="section-title font-title-h1 text-center"
          style={{marginTop: "1em"}}
        >
          {t("functional.title")}
        </div>
        {/* <div className="text-center" style={{margin: "0px 2em"}}>
          {t("functional.text")}
        </div> */}
        <div className="gridCardsView lineGridCardsViewColumn">
          {functionalCardsInfo.map((x, i) => renderCard(x, i))}
        </div>
        <div style={{margin: "2em 1em 3em 1em"}}>
          <a
            href="https://ecotrain.github.io/WM_doc"
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("functional.user_guide")}
          </a>
        </div>
      </ScrollOverPack>
    </Layout>
  );
};

const renderCard = (info, i) => {
  const {t} = useTranslation("wellness");

  return (
    <div key={i} className="gridCardWrapper lineGridCardWrapper">
      <div className="gridCard lineGridCard">
        <div className="lineGridCardIcon">
          <img src={info.image} style={{width: "100%", maxWidth: 100}} />
        </div>

        <div className="gridCardView lineGridViewLeft">
          <div className="font-title-h3" style={{textAlign: "left"}}>
            {t(info.title)}
          </div>
          <div style={{textAlign: "left"}}>{t(info.text)}</div>
        </div>
      </div>
    </div>
  );
};

export default WellnessFunctional;
