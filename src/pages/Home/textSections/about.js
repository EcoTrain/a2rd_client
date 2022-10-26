import React from "react";
import {scroller} from "react-scroll";
import {useTranslation} from "react-i18next";
import {Layout} from "antd";
import "antd/dist/antd.min.css";

const AboutDescription = ({t}) => {
  return (
    <div key="homeAboutDescription">
      <div className="section-title font-title-h1 text-center">
        {t("about.title")}
      </div>
      <div className="font-text-large description">{t("about.text")}</div>
    </div>
  );
};

const AboutFounder = ({t}) => {
  const imgAlexey =
    process.env.PUBLIC_URL + "/static/images/index/aleksey.webp";
  return (
    <div
      key="homeAboutFounder"
      style={{margin: "1em 0", cursor: "pointer"}}
      onClick={() => scroller.scrollTo("contacts", {duration: 0})}
    >
      <img
        className="avatar"
        src={imgAlexey}
        style={{height: 100, width: 100, marginBottom: "1em"}}
      />
      <div>
        <div className="text">{t("about.signature")}</div>
        <div>{t("about.name")}</div>
        <div>{t("about.position")}</div>
      </div>
    </div>
  );
};

const HomeAbout = () => {
  const {t} = useTranslation(["home"]);
  return (
    <Layout id="homeAbout" className="section section-white">
      <div className="section-content text-center">
        <div className="section-content-block">
          {AboutDescription({t})}
          {AboutFounder({t})}
        </div>
      </div>
    </Layout>
  );
};

export default HomeAbout;
