import React, { useRef } from "react";
import QueueAnim from "rc-queue-anim";
import ScrollAnim from "rc-scroll-anim";
import { scroller } from "react-scroll";
import { useTranslation } from "react-i18next";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

const ScrollOverPack = ScrollAnim.OverPack;

const AboutDescription = ({ t }) => {
  return (
    <div key="homeAboutDescription" id="homeAboutDescription">
      <div className="section-title font-title-h1 text-center">
        {t("about.title")}
      </div>
      <div className="font-text-large description">{t("about.text")}</div>
    </div>
  );
};

const AboutFounder = ({ t }) => {
  const imgAlexey =
    process.env.PUBLIC_URL + "/static/images/index/aleksey.webp";
  return (
    <div
      key="homeAboutFounder"
      id="homeAboutFounder"
      style={{ margin: "1em 0", cursor: "pointer" }}
      onClick={() => {
        scroller.scrollTo("contacts", {
          duration: 4000,
          smooth: "easeOutQuint",
        });
      }}
    >
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
  );
};

const HomeAbout = () => {
  const pageRef = useRef();
  const { t } = useTranslation(["home"]);
  return (
    <Layout
      id="homeAbout"
      ref={pageRef}
      className="section splitSection section-white"
    >
      <ScrollOverPack
        replay
        always={false}
        playScale={0}
        className="section-content text-center"
      >
        <QueueAnim type={["bottom", "top"]} className="section-content-block">
          {AboutDescription({ t })}
          {AboutFounder({ t })}
        </QueueAnim>
      </ScrollOverPack>
    </Layout>
  );
};

export default HomeAbout;
