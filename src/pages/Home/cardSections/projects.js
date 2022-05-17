import React, { useRef, useState } from "react";
import QueueAnim from "rc-queue-anim";
import TextyAnim from "rc-texty";
import ScrollAnim from "rc-scroll-anim";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import { projectsCardsInfo } from "../../ExtendedPages/projects";

import "./gridCard.scss";
import { splitTextByWords } from "../../../fucntions/splitText";

const ScrollOverPack = ScrollAnim.OverPack;

const HomeProjects = () => {
  return (
    <Layout className="section section-lightGray" id="homeProjects">
      <ScrollOverPack replay always={false} playScale={0}>
        <QueueAnim
          type={["left", "right"]}
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
          delay={300}
          duration={1000}
        >
          <div
            className="font-title-h1 text-center"
            style={{ marginTop: "3em" }}
          >
            Our projects
          </div>
          <TextyAnim
            type="mask-top"
            split={splitTextByWords}
            delay={300}
            interval={10}
            className="text-center"
            style={{ margin: "0 3em" }}
          >
            At the A2 Research and Development lab, we provide analytics,
            cutting-edge reviews, and models to optimize the operating companies
            processes concerning industry specifics, focusing on the best
            available and future-oriented solutions considering ESG and SDG
            trends.
          </TextyAnim>
          <div
            className="gridCardsView"
            style={{ marginTop: "1em", marginBottom: "1em" }}
          >
            {projectsCardsInfo.map((x, i) => renderCard(x, i))}
          </div>
        </QueueAnim>
      </ScrollOverPack>
    </Layout>
  );
};

const renderCard = (info, i) => {
  const cardRef = useRef();
  const [hover, setHover] = useState(false);

  const onHover = () => {
    cardRef.current.style.background = info.bg;
    cardRef.current.style.color = "black";
    setHover(true);
  };

  const onUnHover = () => {
    cardRef.current.style.background = `url(${info.icon})  no-repeat center center / cover`;
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
            <div className="font-title-h1 text-center">{info.title}</div>
          </div>
        ) : (
          <div className="gridCardView">
            <div className="font-title-h3 text-center">{info.title}</div>
            <div className="description">{info.text}</div>
            <button
              className="gridCardViewLink"
              onClick={() =>
                (window.location.href = `${process.env.REACT_APP_URL}/projects/${info.id}`)
              }
            >
              Read more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeProjects;
