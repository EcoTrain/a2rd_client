import React, { useRef } from "react";
import TextyAnim from "rc-texty";
import ScrollAnim from "rc-scroll-anim";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import { splitTextByWords } from "../../../fucntions/splitText";

const { Content } = Layout;
const ScrollOverPack = ScrollAnim.OverPack;

const HomeSolutions = () => {
  const pageRef = useRef();

  const getTextAnim = (text, i) => (
    <TextyAnim
      className="font-text-big description"
      type="bottom"
      split={splitTextByWords}
      delay={i * 300}
      interval={5}
    >
      {text}
    </TextyAnim>
  );

  const texts = [
    "Our solutions facilitate routine procedures and enhance security through user-friendly software assistants and a wide network of partners from various sectors.",
    "We also offer user-friendly interfaces of personal medical assistants for those who live without the need for therapeutic support but want to increase the level of protection for themselves and their loved ones through a personalized profile.",
  ];

  return (
    <Layout
      className="section section-white"
      id="homeSolutions"
      ref={pageRef}
    >
      <Content className="section-content">
        <div className="section-content-text center-block-800">
          <div className="font-title-h1 text-center">Our solutions</div>
          <ScrollOverPack replay always={false} playScale={0}>
            {texts.map((x, i) => (
              <div key={i}>{getTextAnim(x, i)}</div>
            ))}
          </ScrollOverPack>
        </div>
      </Content>
    </Layout>
  );
};

export default HomeSolutions;
