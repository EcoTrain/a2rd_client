import React from "react";
import {scroller} from "react-scroll";
import {Trans, useTranslation} from "react-i18next";
import startupsCardsInfo from "../startups/config";

const AboutDescription = ({t}) => {
  const link_wm = startupsCardsInfo.wm.links.website.link || "";
  const link_atmos = startupsCardsInfo.airflow.links.website.link || "";
  return (
    <div key="aboutDescription">
      <div className="section-title font-size-2 font-title text-align-center">
        {t("about.title")}
      </div>
      <div className="font-size-3 description">
        <Trans
          t={t}
          i18nKey={t("about.text")}
          components={[
            <a
              key={`linkWM`}
              href={link_wm}
              rel="noreferrer noopener"
              target="_blank"
              aria-label={"Wellness Monitor"}
            />,
            <a
              key={`linkAtmos`}
              href={link_atmos}
              rel="noreferrer noopener"
              target="_blank"
              aria-label={"Airflow modelling"}
            />,
          ]}
        />
      </div>
    </div>
  );
};

const AboutFounder = ({t}) => {
  const imgAlexey =
    process.env.PUBLIC_URL + "/static/images/index/aleksey.webp";
  return (
    <div key="aboutFounder" style={{margin: "1em 0"}}>
      <img
        className="avatar"
        src={imgAlexey}
        alt={t("about.name") + " " + t("about.position")}
        style={{
          height: 100,
          width: 100,
          marginBottom: "1em",
          cursor: "pointer",
        }}
        onClick={() => scroller.scrollTo("contacts", {duration: 0})}
      />
      <div>
        <div className="text">{t("about.signature")}</div>
        <div>{t("about.name")}</div>
        <div>{t("about.position")}</div>
      </div>
    </div>
  );
};

const AboutPreview = () => {
  const {t} = useTranslation(["home"]);
  return (
    <section id="about" className="section section-fullscreen section-white">
      <div
        className="section-content text-align-center"
        style={{padding: "0 2rem"}}
      >
        {AboutDescription({t})}
        {AboutFounder({t})}
      </div>
    </section>
  );
};

export default AboutPreview;
