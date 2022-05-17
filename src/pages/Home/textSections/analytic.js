import React, { useRef } from "react";
import TextyAnim from "rc-texty";
import ScrollAnim from "rc-scroll-anim";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import { splitTextByWords } from "../../../fucntions/splitText";

const { Content } = Layout;
const ScrollOverPack = ScrollAnim.OverPack;

const HomeAnalytic = () => {
  const pageRef = useRef();
  return (
    <Layout
      className="section section-gray"
      id="homeActivities"
      ref={pageRef}
    >
      <Content className="section-content">
        <div className="section-content-text center-block-800">
          <div className="font-title-h1 text-center">Our analytic</div>
          <ScrollOverPack replay always={false} playScale={0}>
            <TextyAnim
              className="font-text-big description "
              type="bottom"
              split={splitTextByWords}
              delay={0}
              interval={5}
            >
              Our analytics, cutting edge reviews and models are in demand by
              companies from the energy, industrial, medical, financial,
              insurance, and other sectors. Our analytics help industrial
              companies improve their ESG-strategies and development programs
              based on cutting edge reviews (scientific reports, IP research,
              publications).
            </TextyAnim>
          </ScrollOverPack>
        </div>
      </Content>
    </Layout>
  );
};

export default HomeAnalytic;
