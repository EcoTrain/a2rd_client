import React, { useEffect, useRef } from "react";
import QueueAnim from "rc-queue-anim";
import TextyAnim from "rc-texty";
import ScrollAnim from "rc-scroll-anim";

import { CheckOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import useOnScreen from "../../../hooks/useOnScreen";
import { splitTextByWords } from "../../../fucntions/splitText";

const { Content } = Layout;
const ScrollOverPack = ScrollAnim.OverPack;

const HomeActivities = () => {
  const pageRef = useRef();
  const onScreen = useOnScreen({ ref: pageRef });

  useEffect(() => {
    if (onScreen) {
      document.title = "A2RD Lab: Activities";
    }
  }, [onScreen]);

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
    <Layout
      className="section section-lightGray"
      id="homeActivities"
      ref={pageRef}
    >
      <Content className="section-content">
        <div className="section-content-img">
          <img src={process.env.PUBLIC_URL + "/static/images/city_logo.webp"} />
        </div>
        <div className="section-content-text">
          <div className="font-title-h1 text-center">Our activities</div>
          <ScrollOverPack replay always={false} playScale={0}>
            <QueueAnim type={["left", "right"]}>
              <div className="description">
                We work in various fields using our background to solve
                industrial, environmental challenges and various issues.
              </div>
              <br />
              <div>Our activities:</div>
              <ul>
                {activitiesList1.map((text, i) => (
                  <li key={i} style={{ display: "flex" }}>
                    <div className="icon">
                      <CheckOutlined />
                    </div>
                    <TextyAnim
                      type="mask-top"
                      split={splitTextByWords}
                      delay={i * 300}
                      interval={10}
                    >
                      {text}
                    </TextyAnim>
                  </li>
                ))}
              </ul>
            </QueueAnim>
          </ScrollOverPack>
        </div>
      </Content>
    </Layout>
  );
};

export default HomeActivities;
