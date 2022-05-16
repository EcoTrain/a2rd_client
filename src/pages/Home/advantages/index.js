import React, { useEffect, useRef } from "react";
import QueueAnim from "rc-queue-anim";
import { Layout } from "antd";
import "antd/dist/antd.min.css";
import useOnScreen from "../../../hooks/useOnScreen";
import "./advantages.scss";

const cardsInfo = [
  {
    title: "advTitle 1",
    text: "advText 2",
    background: "red",
    icon: process.env.PUBLIC_URL + "/static/images/index/alexey.webp",
  },
  {
    title: "advTitle 2",
    text: "advText 2",
    background: "green",
    icon: process.env.PUBLIC_URL + "/static/images/index/alexey.webp",
  },
  {
    title: "advTitle 3",
    text: "advText 3",
    background: "blue ",
    icon: process.env.PUBLIC_URL + "/static/images/index/alexey.webp",
  },
];

const renderCards = () => {
  return (
    <div className="fullGridCardsView">
      {cardsInfo.map((x, i) => (
        <div key={i} className="fullGridCardWrapper">
          <div key={i} className="fullGridCard">
            <div className="fullGridCardImg">
              <img src={x.icon} />
            </div>
            <div className="font-title-h3">{x.title}</div>
            <div>{x.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const HomeAdvantages = () => {
  const pageRef = useRef();
  const onScreen = useOnScreen({ ref: pageRef, rootMargin: "-100px" });

  useEffect(() => {
    if (onScreen) {
      document.title = "A2RD Lab: Advantages";
    }
  }, [onScreen]);

  return (
    <Layout className="section section-white" id="homeAdvantages" ref={pageRef}>
      <QueueAnim type={["left", "right"]} className="section-content">
        <div
          id="contactsContent"
          className="section-content-text text-center"
          style={{ padding: 0 }}
        >
          <div
            className="font-title-h1 text-center"
            style={{
              position: "absolute",
              top: "2em",
              margin: "auto",
              width: "100%",
            }}
          >
            Our advantages
          </div>
          {renderCards()}
        </div>
      </QueueAnim>
    </Layout>
  );
};

export default HomeAdvantages;
