import React from "react";
import {useTranslation} from "react-i18next";
import TextyAnim from "rc-texty";

import {renderNextPageBtn} from "../../../components/Section/PageScroller";
import {splitTextByWords} from "../../../fucntions/splitText";

const DistributionIntro = () => {
  const {t} = useTranslation(["modeling"]);

  const bgGradient = [
    "linear-gradient(var(--bgPrimaryTransparent), var(--bgPrimaryTransparent))",
  ].join(",");
  const bg = `${bgGradient}, url(${
    process.env.PUBLIC_URL + "/static/images/index/sections/max/atmos.webp"
  })  no-repeat center center / cover`;

  return (
    <section
      id="modelingDistributionIntro"
      className="section section-fullscreen"
      style={{background: bg}}
    >
      <div className="section-content text-align-center">
        <div
          className="section-title font-title font-size-1 text-align-center"
          style={{lineHeight: "1em"}}
        >
          {t("distribution.about.title")}
        </div>

        <TextyAnim
          type="mask-top"
          split={splitTextByWords}
          interval={10}
          className="font-size-3"
          style={{margin: "0 1em"}}
        >
          {t("distribution.about.text")}
        </TextyAnim>
        {renderNextPageBtn({id: "distributionSolution"})}
      </div>
    </section>
  );
};

export default DistributionIntro;
