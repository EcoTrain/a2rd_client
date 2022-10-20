import React from "react";
import {useTranslation} from "react-i18next";
import "antd/dist/antd.min.css";
import {startupsCardsInfo} from "../Home/cardSections/cardsConfig";
import {Startup} from "../ExtendedPages/startups";

const WellnessAbout = () => {
  const {t} = useTranslation(["startups"]);

  let config = startupsCardsInfo[0];
  config.title = "about"; // i18n startups.about key

  return (
    // TODO: change config format: list -> dict
    <div id="wellnessAbout">
      <Startup item={config} t={t} />
    </div>
  );
};

export default WellnessAbout;
