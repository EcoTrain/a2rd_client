import React, { useEffect, useRef, useState } from "react";
import QueueAnim from "rc-queue-anim";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import useOnScreen from "../../../hooks/useOnScreen";
import { startupsCardsInfo } from "../../ExtendedPages/startups";

import "./gridCard.scss";
import "./lineGridCard.scss";

const renderCard = (info, i) => {
  const cardRef = useRef();
  const [hover, setHover] = useState(false);

  const onHover = () => {
    cardRef.current.style.background = info.bg;
    cardRef.current.style.minWidth = "300px";
    cardRef.current.style.transition = "min-width 1.5s linear;";
    setHover(true);
  };

  const onUnHover = () => {
    cardRef.current.style.background = null;
    cardRef.current.style.minWidth = "unset";
    setHover(false);
  };

  return (
    <div key={i} className="gridCardWrapper lineGridCardWrapper" ref={cardRef}>
      <div
        className="gridCard lineGridCard"
        onMouseEnter={onHover}
        onMouseLeave={onUnHover}
      >
        {!hover ? (
          <div className="gridCardPreview lineGridCardPreview">
            <div className="font-title-h3">{info.title}</div>
            <div className="description">{info.smallText}</div>
          </div>
        ) : (
          <div className="gridCardView lineGridCardView">
            <div className="font-title-h3">{info.title}</div>
            <div className="description">{info.text}</div>
          </div>
        )}
      </div>
    </div>
  );
};

const HomeStartups = () => {
  const pageRef = useRef();
  const onScreen = useOnScreen({ ref: pageRef, rootMargin: "-100px" });

  useEffect(() => {
    if (onScreen) {
      document.title = "A2RD Lab: Projects";
    }
  }, [onScreen]);

  return (
    <Layout className="section section-white" id="homeProjects" ref={pageRef}>
      <QueueAnim
        type={["left", "right"]}
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div className="font-title-h1 text-center" style={{ marginTop: "2em" }}>
          Our startups
        </div>
        <div className="gridCardsView lineGridCardsView">
          {startupsCardsInfo.map((x, i) => renderCard(x, i))}
        </div>
      </QueueAnim>
    </Layout>
  );
};

export default HomeStartups;
