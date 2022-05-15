import React, { useEffect, useRef } from "react";
import QueueAnim from "rc-queue-anim";
import { Layout } from "antd";
import "antd/dist/antd.min.css";
import "./about.scss";
import useOnScreen from "../../../hooks/useOnScreen";

const { Content } = Layout;

const AboutDescription = () => {
  return (
    <div key="AboutDescription">
      <div className="font-title-h1 text-center">About</div>
      <div className="font-text-big description">
        At the A2 Research and Development lab we are motivated by more than the
        simple pursuit of business success. We aim to make the world sustainable
        and better than it was before. We work in various fields using our
        background in RAW/BIG data processing and analysis, IT (AI, Algorithm
        Designing and Programming, Database and Modelling), to solve industrial,
        environmental challenges and various issues. Our analytics, cutting edge
        reviews and models are in demand by companies from the energy,
        industrial, medical, financial, insurance, and other sectors. The main
        commercial projects are start-up initiatives wellness monitor and
        airflow modeling which are related impact investments aimed at
        developing a sustainable society. Our analytics help industrial
        companies improve their ESG-strategies and development programs based on
        cutting edge reviews (scientific reports, IP research, publications). At
        the A2 Research and Development lab, we are open to collaborating with
        investment companies and the research community, so some of our study
        results have already been published in scientific journals. Others are
        submitted for peer review.
      </div>
    </div>
  );
};

const AboutFounder = () => {
  const imgAlexey = process.env.PUBLIC_URL + "/static/images/index/alexey.webp";
  console.log("imgAlexey", imgAlexey);
  return (
    <div key="AboutFounder" id="aboutFounder">
      <img
        className="avatar"
        src={imgAlexey}
        style={{ height: 100, width: 100 }}
      />
      <div className="founder-text">
        <div>
          With the highest consideration from the A2 Research and Development
          lab
        </div>
        <div>Aleksey A. ROMANOV</div>
        <div>CEO, founder</div>
      </div>
    </div>
  );
};

const HomeAbout = () => {
  const pageRef = useRef();
  const onScreen = useOnScreen({ ref: pageRef, rootMargin: "-100px" });

  useEffect(() => {
    if (onScreen) {
      document.title = "A2RD Lab: About";
    }
  }, [onScreen]);

  return (
    <Layout className="section section-lightGray" id="homeAbout" ref={pageRef}>
      <Content className="aboutContent">
        <QueueAnim type={["left", "right"]}>
          {AboutDescription()}
          {AboutFounder()}
        </QueueAnim>
      </Content>
    </Layout>
  );
};

export default HomeAbout;
