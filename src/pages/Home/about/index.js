import React from "react";
import QueueAnim from "rc-queue-anim";
import { Layout } from "antd";
import "antd/dist/antd.min.css";
import "./about.scss";

const { Content } = Layout;

const AboutDescription = () => {
  return (
    <div key="AboutDescription" style={{ width: "50%" }}>
      <div id={"aboutDescTitle"}>Title</div>
      <div id={"aboutDescText"}>
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
  const imgAlexey = require("../../../static/images/index/alexey.webp");
  console.log("imgAlexey", imgAlexey);
  return (
    <div key="AboutFounder" style={{ width: "50%" }}>
      <img src={imgAlexey} style={{ height: 100, width: 100 }} />
      <div>
        With the highest consideration from the A2 Research and Development lab
      </div>
      <div>Aleksey A. ROMANOV</div>
      <div>CEO, founder</div>
    </div>
  );
};

const HomeAbout = () => {
  return (
    <Layout className="section" id="homeAbout">
      <Content className="card">
        <QueueAnim type={["left", "right"]} style={{ display: "flex" }}>
          {AboutFounder()}
          {AboutDescription()}
        </QueueAnim>
      </Content>
    </Layout>
  );
};

export default HomeAbout;
