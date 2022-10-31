import React from "react";
import ScrollAnim from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import {useTranslation} from "react-i18next";



import {functionalCardsInfo} from "./config/functional";

import "../../../components/CardPage/gridCard.scss";
import "../../../components/CardPage/lineGridCard.scss";

const ScrollOverPack = ScrollAnim.OverPack;

const WellnessFunctional = () => {
  const {t} = useTranslation("wellness");
  return (
    <section className="section section-white" id="wellnessFunctional">
      <div className="section-content">
        <div className="section-title font-title-h1 text-center">
          {t("functional.title")}
        </div>
        <div className="gridCardsView lineGridCardsViewColumn">
          {functionalCardsInfo.map((x, i) => (
            <ScrollOverPack key={i} replay always={false} playScale={0.2}>
              <TweenOne animation={{opacity: 1}} style={{opacity: 0.001}}>
                {renderCard(x, i)}
              </TweenOne>
            </ScrollOverPack>
          ))}
        </div>
        <a
          href="https://ecotrain.github.io/WM_doc"
          target="_blank"
          rel="noreferrer noopener"
          style={{margin: "2em 1em 3em 1em"}}
          aria-label={t("functional.user_guide")}
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
