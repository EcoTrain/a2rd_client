import React from "react";
import TextyAnim from "rc-texty";
import ScrollAnim from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import {useTranslation} from "react-i18next";

import {splitTextByWords} from "../../../fucntions/splitText";

const ScrollOverPack = ScrollAnim.OverPack;

const config = {
  title: "multiagent.analysis.title",
  text: "multiagent.analysis.text",
};

const MultiagentAnalysis = () => {
  const {t} = useTranslation("modeling");

  return (
    <section
      id="multiagentAnalysis"
      className={"section section-white"}
      style={{boxShadow: "none", minHeight: "100vh"}}
    >
      <div className={`section-content`}>
        {/* <ScrollOverPack replay always={false} playScale={0.2}>
          <TweenOne
            className="section-title font-size-2 font-title text-center"
            animation={{opacity: 1}}
            style={{opacity: 0.001}}
          >
            {t(config.title)}
          </TweenOne>
        </ScrollOverPack> */}
        <ScrollOverPack replay always={false} playScale={0.2}>
          <TweenOne
            className="font-size-2 text-align-center"
            animation={{opacity: 1}}
            style={{opacity: 0.001}}
          >
            <TextyAnim
              type="bottom"
              split={splitTextByWords}
              interval={20}
              style={{maxWidth: 1000}}
            >
              {t(config.text)}
            </TextyAnim>
          </TweenOne>
        </ScrollOverPack>
      </div>
    </section>
  );
};

export default MultiagentAnalysis;
