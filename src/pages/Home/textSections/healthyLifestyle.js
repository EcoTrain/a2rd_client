import React, {useRef} from "react";
import ScrollAnim from "rc-scroll-anim";
import {useTranslation} from "react-i18next";
import {Layout} from "antd";
import "antd/dist/antd.min.css";

const ScrollOverPack = ScrollAnim.OverPack;

const HealthyLifestyleDescription = ({t}) => {
  return (
    <div key="homeAboutDescription" id="homeAboutDescription">
      <div className="section-title font-title-h1 text-center">
        {t("healthyLifestyle.title")}
      </div>
      <div className="font-text-big description">{t("healthyLifestyle.text")}</div>
    </div>
  );
};

const HomeHealthyLifestyle = () => {
  const pageRef = useRef();
  const {t} = useTranslation(["home"]);
  return (
    <Layout id="homeAbout" ref={pageRef} className="section section-white">
      <ScrollOverPack
        replay
        always={false}
        playScale={0}
        className="section-content text-center"
      >
        <div className="section-content-block">
          {HealthyLifestyleDescription({t})}
        </div>
      </ScrollOverPack>
    </Layout>
  );
};

export default HomeHealthyLifestyle;
