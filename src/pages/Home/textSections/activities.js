import React, { useRef } from "react";
import QueueAnim from "rc-queue-anim";
import ScrollAnim from "rc-scroll-anim";

import { CheckOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import {
  useElementPosition,
  useScrollPosition,
} from "../../../hooks/useScrollPosition";

const { Content } = Layout;
const ScrollOverPack = ScrollAnim.OverPack;

const HomeActivities = () => {
  const pageRef = useRef();
  let _prevPos = 0;
  let _currPos = 0;

  const scrollDirection = useRef();
  useScrollPosition({
    effect: ({ prevPos, currPos }) => {
      const isScrollUp = currPos.y > prevPos.y;
      scrollDirection.current = isScrollUp ? "up" : "down";
      console.log({ isScrollUp });
      _currPos = currPos;
      _prevPos = prevPos;
    },
  });

  useElementPosition({
    effect: (pos) => {
      const onScreen =
        (scrollDirection.current == "up" && pos.bottom > pos.height) ||
        (scrollDirection.current == "down" && pos.top > 0);
      console.log("useElementPosition", onScreen, _prevPos, _currPos, pos);
      
      const scrollHandler = () => false;
      document.body.addEventListener("scroll", scrollHandler);
      
      // elemRef.current.style.position =
      //   onScreen && children.props.position == "sticky"
      //     ? "absolute"
      //     : children.props.position || "relative";
    },
    element: pageRef.current,
  });

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
          <img
            src={
              process.env.PUBLIC_URL + "/static/images/index/activities.jpeg"
            }
          />
        </div>
      </Content>
    </Layout>
  );
};

export default HomeActivities;
