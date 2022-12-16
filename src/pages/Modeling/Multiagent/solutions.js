import React, {useState} from "react";
import TextyAnim from "rc-texty";
import ScrollAnim from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import {useTranslation} from "react-i18next";

import {splitTextByWords} from "../../../fucntions/splitText";
import {DownOutlined, UpOutlined} from "@ant-design/icons";

const ScrollOverPack = ScrollAnim.OverPack;

const config = {
  title: "multiagent.payload.title",
  text: "multiagent.payload.text",
  note: "multiagent.payload.note",
};

const MultiagentPayload = () => {
  const {t} = useTranslation("modeling");
  const [extended, setExtend] = useState(false);

  return (
    <section id="distributionSolution" className={"section section-white"}>
      <div className={`section-content`}>
        <ScrollOverPack replay always={false} playScale={0.2}>
          <TweenOne
            className="section-title font-size-2 font-title text-center"
            animation={{opacity: 1}}
            style={{opacity: 0.001}}
          >
            {t(config.title)}
          </TweenOne>
        </ScrollOverPack>
        <div style={{maxWidth: 900}}>
          <ScrollOverPack replay always={false} playScale={0.2}>
            <TweenOne
              className="font-size-3 description"
              animation={{opacity: 1}}
              style={{opacity: 0.001}}
            >
              <TextyAnim type="bottom" split={splitTextByWords} interval={20}>
                {t(config.text)}
              </TextyAnim>
            </TweenOne>
          </ScrollOverPack>

          <div
            style={{
              overflow: "hidden",
              transition: "all 0.5s ease-in-out",
              maxHeight: extended ? "100vh" : 0,
            }}
          >
            <div className="font-size-3 description">{t(config.note)}</div>
          </div>
          <div
            onClick={() => setExtend(!extended)}
            style={{textAlign: "center"}}
          >
            {extended ? <UpOutlined /> : <DownOutlined />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiagentPayload;
