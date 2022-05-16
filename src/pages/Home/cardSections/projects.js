import React, { useEffect, useRef, useState } from "react";
import QueueAnim from "rc-queue-anim";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import useOnScreen from "../../../hooks/useOnScreen";
import { projectsCardsInfo } from "../../ExtendedPages/projects";

import "./gridCard.scss";

const renderCard = (info, i) => {
  const cardRef = useRef();
  const [hover, setHover] = useState(false);

  const onHover = () => {
    cardRef.current.style.background = info.bg;
    cardRef.current.style.minWidth = "300px";
    cardRef.current.style.transition = "min-width 1.5s linear;";
    cardRef.current.style.color = "black";
    setHover(true);
  };

  const onUnHover = () => {
    cardRef.current.style.background = `url(${info.icon})  no-repeat center center / cover`;
    cardRef.current.style.minWidth = "150px";
    cardRef.current.style.color = info.color;
    setHover(false);
  };

  return (
    <div key={i} className="gridCardWrapper">
      <div
        className="gridCard"
        ref={cardRef}
        onMouseEnter={onHover}
        onMouseLeave={onUnHover}
        style={{
          background: `url(${info.icon})  no-repeat center center / cover`,
          color: info.color,
        }}
      >
        {!hover ? (
          <div className="gridCardPreview">
            {/* <div className="gridCardImg">
              <img src={info.icon} />
            </div> */}
            <div className="font-title-h1">{info.title}</div>
          </div>
        ) : (
          <div className="gridCardView">
            <div className="font-title-h3">{info.title}</div>
            <div className="description">{info.text}</div>
            <button
              className="gridCardViewLink"
              onClick={() => (window.location.href = "/projects")}
            >
              Read more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const HomeProjects = () => {
  const pageRef = useRef();
  const onScreen = useOnScreen({ ref: pageRef, rootMargin: "-100px" });

  useEffect(() => {
    if (onScreen) {
      document.title = "A2RD Lab: Projects";
    }
  }, [onScreen]);

  return (
    <Layout
      className="section section-lightGray"
      id="homeProjects"
      ref={pageRef}
    >
      <QueueAnim
        type={["left", "right"]}
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div className="font-title-h1 text-center" style={{ marginTop: "2em" }}>
          Our projects
        </div>
        <div className="text-center">
          At the A2 Research and Development lab, we provide analytics,
          cutting-edge reviews, and models to optimize the operating companies
          processes concerning industry specifics, focusing on the best
          available and future-oriented solutions considering ESG and SDG
          trends.
        </div>
        <div
          className="gridCardsView"
          style={{ marginTop: "1em", marginBottom: "1em" }}
        >
          {projectsCardsInfo.map((x, i) => renderCard(x, i))}
        </div>
      </QueueAnim>
    </Layout>
  );
};

export default HomeProjects;
