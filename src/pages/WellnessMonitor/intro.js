import React, {useRef} from "react";
import {useTranslation} from "react-i18next";


import {renderNextPageBtn} from "../../components/Section/PageScroller";
import {splitTextByWords} from "../../fucntions/splitText";
import "./index.scss";
import TextyAnim from "rc-texty";

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

      <TextyAnim
        type="mask-top"
        split={splitTextByWords}
        interval={10}
        className="font-text-large text"
        style={{margin: "0 1em"}}
      >
        {t("about.shortText")}
      </TextyAnim>
    </div>
  );
};

const WellnessIntro = () => {
  const {t} = useTranslation(["wellness"]);
  const bg = process.env.PUBLIC_URL + "/static/images/wellness/diaries.webp";

  return (
    <section id="wellnessIntro" className="section">
      <div className="section-content text-center">
        <div
          id="wellnessIntroBg"
          style={{
            backgroundImage: "url(" + bg + ")",
          }}
        />
        <div className="section-content-block">{AboutDescription({t})}</div>
        {renderNextPageBtn({id: "wellnessAbout"})}
      </div>
    </section>
  );
};

export default WellnessIntro;
