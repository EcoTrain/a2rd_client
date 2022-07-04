import React, { useRef } from "react";
import QueueAnim from "rc-queue-anim";
import ScrollAnim from "rc-scroll-anim";
import { useTranslation } from "react-i18next";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

const ScrollOverPack = ScrollAnim.OverPack;

const AboutDescription = ({ t }) => {
  return (
    <div
      key="homeAboutDescription"
      id="homeAboutDescription"
      className="section-content-block"
    >
      <div className="section-title font-title-h1 text-center">
        {t("multiagent.about.title")}
      </div>
      <div className="font-text-large description">{t("multiagent.about.text")}</div>
    </div>
  );
};

const MultiagentAbout = () => {
  const pageRef = useRef();
  const { t } = useTranslation(["modeling"]);
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
        {AboutDescription({ t })}
      </ScrollOverPack>
    </Layout>
  );
};

export default MultiagentAbout;
