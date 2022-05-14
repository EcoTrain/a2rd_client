import React, { useEffect, useRef } from "react";
import QueueAnim from "rc-queue-anim";
import TextyAnim from "rc-texty";
import { CheckOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import useOnScreen from "../../../hooks/useOnScreen";
import "./activities.scss";

const { Content } = Layout;

const HomeActivities = () => {
  const pageRef = useRef();
  const onScreen = useOnScreen({ ref: pageRef, rootMargin: "-100px" });

  useEffect(() => {
    if (onScreen) {
      document.title = "A2RD Lab: Activities";
    }
  }, [onScreen]);

  const activitiesList = [
    "Computational modeling",
    "Machine Learning (AI)",
    "Neural network",
    "Predictive Analytics",
    "Spatial analysis (geographic information technology and remote sensing)",
    "Technology consulting",
    "App development",
  ];

  const getSplit = (e) => {
    const text = e.split(" ");
    const char = [];
    text.forEach((str, i) => {
      char.push(<span key={`${str}-${i}`}>{str}</span>);
      if (i < text.length - 1) {
        char.push(<span key={` -${i}`}> </span>);
      }
    });
    return char;
  };

  return (
    <Layout className="section section-darkGray" id="homeAbout" ref={pageRef}>
      <Content className="aboutContent">
        <div className="font-title-h1 text-center">Activities</div>
        <QueueAnim type={["left", "right"]}>
          {activitiesList.map((text, i) => (
            <li key={i} style={{ display: "flex" }}>
              <CheckOutlined />
              <TextyAnim
                type="mask-top"
                delay={i * 300}
                split={getSplit}
                interval={30}
              >
                {text}
              </TextyAnim>
            </li>
          ))}
        </QueueAnim>
      </Content>
    </Layout>
  );
};

export default HomeActivities;
