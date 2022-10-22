import React, {useRef} from "react";
import ScrollAnim from "rc-scroll-anim";
import {useTranslation} from "react-i18next";
import {Layout} from "antd";
import "antd/dist/antd.min.css";
import {renderNextPageBtn} from "../../components/ScrollPage";
import "./index.scss";

const ScrollOverPack = ScrollAnim.OverPack;

const AboutDescription = ({t}) => {
  return (
    <div key="wellnessIntroDescription">
      <div
        className="section-title font-title-preview text-center"
        style={{
          lineHeight: "1em",
        }}
      >
        {t("about.title")}
      </div>
      <div className="font-text-large text">{t("about.shortText")}</div>
    </div>
  );
};

const WellnessIntro = () => {
  const pageRef = useRef();
  const {t} = useTranslation(["wellness"]);
  const bg = process.env.PUBLIC_URL + "/static/images/wellness/diaries.png";

  return (
    <Layout id="wellnessIntro" ref={pageRef} className="section">
      <ScrollOverPack
        replay
        always={false}
        playScale={0}
        className="section-content text-center"
      >
        <div
          id="wellnessIntroBg"
          style={{
            backgroundImage: "url(" + bg + ")",
          }}
        />
        <div className="section-content-block">{AboutDescription({t})}</div>
        {renderNextPageBtn({id: "wellnessAbout"})}
      </ScrollOverPack>
    </Layout>
  );
};

export default WellnessIntro;
