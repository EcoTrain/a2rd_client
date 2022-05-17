import React, { useRef } from "react";
import QueueAnim from "rc-queue-anim";
import TextyAnim from "rc-texty";
import ScrollAnim from "rc-scroll-anim";

import { CheckOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import { splitTextByWords } from "../../../fucntions/splitText";

const { Content } = Layout;
const ScrollOverPack = ScrollAnim.OverPack;

const HomeActivities = () => {
  const pageRef = useRef();

  const activitiesList1 = [
    "RAW/BIG data processing and analysis",
    "Computational modeling",
    "Machine Learning (AI) and Neural network",
    "Predictive Analytics",
    "Spatial analysis (geographic information technology and remote sensing)",
    "Technology consulting",
    "App development",
  ];

  return (
    <Layout className="section section-gray" id="homeActivities" ref={pageRef}>
      <Content className="section-content">
        <div className="section-content-text center-block-800">
          <div className="font-title-h1 text-center">Our activities</div>
          <ScrollOverPack replay always={false} playScale={0}>
            <div className="font-text-big description">
              We work in various fields using our background to solve
              industrial, environmental challenges and various issues.
            </div>
            <ul style={{ marginTop: "1em" }}>
              <QueueAnim type={["right"]} delay={300} duration={1000}>
                {activitiesList1.map((text, i) => (
                  <li key={i} style={{ display: "flex" }}>
                    <div className="icon">
                      <CheckOutlined />
                    </div>
                    <div className="font-text-big">{text}</div>
                  </li>
                ))}
              </QueueAnim>
            </ul>
          </ScrollOverPack>
        </div>
      </Content>
    </Layout>
  );
};

export default HomeActivities;
