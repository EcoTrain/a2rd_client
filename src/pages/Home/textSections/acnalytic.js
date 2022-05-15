import React, { useEffect, useRef } from "react";
import TextyAnim from "rc-texty";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import useOnScreen from "../../../hooks/useOnScreen";
import { splitTextByWords } from "../../../fucntions/splitText";

const { Content } = Layout;

const HomeAnalytic = () => {
  const pageRef = useRef();
  const onScreen = useOnScreen({ ref: pageRef, rootMargin: "-100px" });

  useEffect(() => {
    if (onScreen) {
      document.title = "A2RD Lab: Our analytic";
    }
  }, [onScreen]);

  return (
    <Layout
      className="section section-darkGray"
      id="homeActivities"
      ref={pageRef}
    >
      <Content className="section-content">
        <div className="section-content-text">
          <div className="font-title-h1 text-center">Our analytic</div>
          <TextyAnim
            className="description"
            type="bottom"
            split={splitTextByWords}
            delay={2200}
            interval={10}
          >
            Our analytics, cutting edge reviews and models are in demand by
            companies from the energy, industrial, medical, financial,
            insurance, and other sectors. Our analytics help industrial
            companies improve their ESG-strategies and development programs
            based on cutting edge reviews (scientific reports, IP research,
            publications).
          </TextyAnim>
        </div>
        <div className="section-content-img">
          <img src={process.env.PUBLIC_URL + "/static/images/city_logo.webp"} />
        </div>
      </Content>
    </Layout>
  );
};

export default HomeAnalytic;
