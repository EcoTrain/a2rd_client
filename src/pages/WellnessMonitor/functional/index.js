import React from "react";
import ScrollAnim from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import {useTranslation} from "react-i18next";

import {functionalCardsInfo} from "./config";

import "../../../components/CardPage/gridCard.scss";
import "../../../components/CardPage/rowCard.scss";
import "./index.scss";

const ScrollOverPack = ScrollAnim.OverPack;

const WellnessFunctional = () => {
  const {t} = useTranslation("wellness");
  return (
    <section className="section section-white" id="wellnessFunctional">
      <div className="section-content">
        <div className="section-title font-size-2 font-title text-align-center">
          {t("functional.title")}
        </div>
        <div className="gridCards">
          {functionalCardsInfo.map((x, i) => renderCard(x, i))}
        </div>
        <a
          href="https://ecotrain.github.io/WM_doc"
          target="_blank"
          rel="noreferrer noopener"
          style={{margin: "1rem", fontWeight: "normal"}}
          aria-label={t("functional.user_guide")}
          className={"btn-outline font-size-4"}
        >
        {t("functional.user_guide")}
        </a>
      </div>
    </section>
  );
};

const renderCard = (info, i) => {
  const {t} = useTranslation("wellness");

  const Icon = info.svg;

  return (
    <ScrollOverPack
      key={i}
      className="gridCard-wrapper"
      replay
      always={false}
      playScale={0.2}
    >
      <TweenOne
        className="gridCard"
        animation={{opacity: 1}}
        style={{opacity: 0.001}}
      >
        <div className="gridCard-icon">
          <Icon
            style={{
              maxWidth: 100,
              maxHeight: 100,
            }}
          />
        </div>

        <div className="gridCard-view lineGridViewLeft">
          <div className="font-size-3 font-subtitle" style={{textAlign: "left"}}>
            {t(info.title)}
          </div>
          <div style={{textAlign: "left"}}>{t(info.text)}</div>
        </div>
      </TweenOne>
    </ScrollOverPack>
  );
};

export default WellnessFunctional;
