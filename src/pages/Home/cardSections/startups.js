import React, { useRef, useState } from "react";
import ScrollAnim from "rc-scroll-anim";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import { startupsCardsInfo } from "./cardsConfig";

import "./gridCard.scss";
import "./lineGridCard.scss";

const ScrollOverPack = ScrollAnim.OverPack;

const HomeStartups = () => {
  const pageRef = useRef();
  return (
    <Layout className="section section-white" id="homeStartups" ref={pageRef}>
      <ScrollOverPack
        replay
        always={false}
        playScale={0}
        className="fullscreen-column-block"
      >
        <div className="font-title-h1 text-center" style={{ marginTop: "3em" }}>
          Our startups
        </div>
        <div
          className="gridCardsView lineGridCardsViewRow"
          style={{
            position: "absolute",
            top: "0",
          }}
        >
          {startupsCardsInfo.map((x, i) => renderCard(x, i))}
        </div>
      </ScrollOverPack>
    </Layout>
  );
};

const renderCard = (info, i) => {
  const cardRef = useRef();
  const [hover, setHover] = useState(false);

  const onHover = () => {
    if (cardRef.current) {
      cardRef.current.style.background = info.bg;
    }
    setHover(true);
  };

  const onUnHover = () => {
    if (cardRef.current) {
      cardRef.current.style.background = null;
    }
    setHover(false);
  };

  return (
    <div
      key={i}
      className="gridCardWrapper lineGridCardWrapper"
      ref={cardRef}
      // onMouseDown={hover ? onUnHover : onHover}
      onMouseEnter={onHover}
      onMouseLeave={onUnHover}
    >
      <div className="gridCard lineGridCard">
        <div className="gridCardView">
          <div className="gridCardViewTitle font-title-h3 text-center ">
            {info.title}
          </div>
          <div className="description">{info.smallText}</div>
          {hover && (
            <div className="gridCardViewLinkBtns">
              <button
                className="gridCardViewLinkBtn"
                onClick={() =>
                  (window.location.href = `${process.env.REACT_APP_URL}/startups/${info.id}`)
                }
              >
                Read more
              </button>
              {info.links &&
                info.links.map((x, i) => (
                  <button
                    key={i}
                    className="gridCardViewLinkBtn"
                    onClick={() => (window.location.href = x.link)}
                  >
                    {x.title}
                  </button>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeStartups;
