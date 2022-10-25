import React from "react";
import ScrollAnim from "rc-scroll-anim";
import QueueAnim from "rc-queue-anim";
import {useTranslation} from "react-i18next";
import {Layout} from "antd";
import "antd/dist/antd.min.css";

import {functionalCardsInfo} from "./config/functional";

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
        playScale={0.3}
        className="section-content"
        style={{height: "100%"}}
      >
        <div
          className="section-title font-title-h1 text-center"
          style={{marginTop: "1em"}}
        >
          {t("functional.title")}
        </div>
        <div className="gridCardsView lineGridCardsViewColumn">
          <QueueAnim type={"bottom"} interval={200} duration={1500}>
            {functionalCardsInfo.map((x, i) => renderCard(x, i))}
          </QueueAnim>
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

  const Icon = info.image;

  return (
    <div key={i} className="gridCardWrapper lineGridCardWrapper">
      <div className="gridCard lineGridCard">
        <div className="lineGridCardIcon">
          <Icon
            style={{
              maxWidth: 100,
              maxHeight: 100,
            }}
          />
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
