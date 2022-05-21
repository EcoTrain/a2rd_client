import React, { useRef } from "react";
import QueueAnim from "rc-queue-anim";
import ScrollAnim from "rc-scroll-anim";
import { useTranslation } from "react-i18next";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

const ScrollOverPack = ScrollAnim.OverPack;

const AboutDescription = () => {
  const { t } = useTranslation();
  return (
    <div
      id="homeAboutDescription"
      key="aboutDescription"
      className="section-content text-center"
    >
      <div className="section-content-block">
        <div className="section-title font-title-h1 text-center">
          {t("about.title")}
        </div>
        <div className="font-text-large description">{t("about.text")}</div>
      </div>
    </div>
  );
};

const AboutFounder = () => {
  const { t } = useTranslation();
  const imgAlexey = process.env.PUBLIC_URL + "/static/images/index/alexey.webp";
  return (
    <div
      key="aboutFounder"
      className="section-content text-center"
      id="homeAboutFounder"
    >
      <div className="section-content-block">
        <img
          className="avatar"
          src={imgAlexey}
          style={{ height: 100, width: 100, marginBottom: "1em" }}
        />
        <div>
          <div>{t("about.signature")}</div>
          <div>{t("about.name")}</div>
          <div>{t("about.position")}</div>
        </div>
      </div>
    </div>
  );
};

const HomeAbout = () => {
  const pageRef = useRef();
  return (
    <Layout id="homeAbout" ref={pageRef}>
      <ScrollOverPack replay always={false} playScale={0}>
        <QueueAnim
          type={["bottom", "top"]}
          className="section section-white"
        >
          {AboutDescription()}
          {AboutFounder()}
        </QueueAnim>
      </ScrollOverPack>
    </Layout>
  );
};

export default HomeAbout;
