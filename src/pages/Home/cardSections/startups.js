import React, { useRef, useState } from "react";
import QueueAnim from "rc-queue-anim";
import ScrollAnim from "rc-scroll-anim";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import { startupsCardsInfo } from "../../ExtendedPages/startups";

import "./gridCard.scss";
import "./lineGridCard.scss";

const ScrollOverPack = ScrollAnim.OverPack;

const HomeStartups = () => {
  const pageRef = useRef();
  return (
    <Layout className="section section-white" id="homeProjects" ref={pageRef}>
      <ScrollOverPack
        replay
        always={false}
        playScale={0}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="font-title-h1 text-center" style={{ marginTop: "2em" }}>
          Our startups
        </div>
        <QueueAnim
          type={["bottom", "top"]}
          delay={200}
          duration={1000}
          className="gridCardsView lineGridCardsView"
        >
          {startupsCardsInfo.map((x, i) => renderCard(x, i))}
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
    <div
      key={i}
      className="gridCardWrapper lineGridCardWrapper"
      ref={cardRef}
      onMouseDown={hover ? onUnHover : onHover}
      onMouseLeave={onUnHover}
    >
      <div className="gridCard lineGridCard" onMouseEnter={onHover}>
        {!hover ? (
          <div className="gridCardPreview lineGridCardPreview">
            <div className="font-title-h3">{info.title}</div>
            <div className="description">{info.smallText}</div>
          </div>
        ) : (
          <div className="gridCardView lineGridCardView">
            <div className="font-title-h3">{info.title}</div>
            <div className="description">{info.smallText}</div>
            <div className="gridCardViewLinks">
              <button
                className="gridCardViewLink"
                onClick={() => (window.location.href = `/startups/${info.id}`)}
              >
                Read more
              </button>
              {info.links &&
                info.links.map((x, i) => (
                  <button
                    key={i}
                    className="gridCardViewLink"
                    onClick={() => (window.location.href = x.link)}
                  >
                    {x.title}
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeStartups;
