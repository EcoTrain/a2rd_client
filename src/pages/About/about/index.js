import React from "react";
import {scroller} from "react-scroll";
import {useTranslation} from "react-i18next";

const AboutDescription = ({t}) => {
  return (
    <div key="aboutDescription">
      <div className="section-title font-size-2 font-title text-align-center">
        {t("about.title")}
      </div>
      <div className="font-size-3 description">{t("about.text")}</div>
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
    <section
      id="about"
      className="section section-fullscreen section-white"
    >
      <div className="section-content text-align-center" style={{padding: "0 2rem"}}>
        {AboutDescription({t})}
        {AboutFounder({t})}
      </div>
    </section>
  );
};

export default AboutPreview;
