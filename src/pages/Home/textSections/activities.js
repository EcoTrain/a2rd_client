import React, { useRef, useState, useEffect } from "react";
import QueueAnim from "rc-queue-anim";
import ScrollAnim from "rc-scroll-anim";

import { CheckOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

const { Content } = Layout;
const ScrollOverPack = ScrollAnim.OverPack;

const HomeActivities = () => {
  const imgMin =
    process.env.PUBLIC_URL +
    "/static/images/index/sections/min/activitiesMin.jpeg";
  const imgMax =
    process.env.PUBLIC_URL +
    "/static/images/index/sections/max/activitiesMax.jpeg";
  const [img, setImg] = useState(window.innerWidth < 960 ? imgMin : imgMax);

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

  const handleResize = () => {
    setImg(window.innerWidth < 960 ? imgMin : imgMax);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return window.addEventListener("resize", null);
  }, []);

  return (
    <Layout
      className="section section-darkWhite"
      id="homeActivities"
      ref={pageRef}
    >
      <Content className="section-content">
        <div className="section-content-text">
          <div className="section-text-block">
            <div className="font-title-h1 text-center">Our activities</div>
            <ScrollOverPack replay always={false} playScale={0}>
              <div className="font-text-big description">
                We work in various fields using our background to solve
                industrial, environmental challenges and various issues.
              </div>
              <ul style={{ marginTop: "1em" }}>
                <QueueAnim type={["right"]}>
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
        </div>
        <div className="section-content-img">
          <img src={img} />
        </div>
      </Content>
    </Layout>
  );
};

export default HomeActivities;
