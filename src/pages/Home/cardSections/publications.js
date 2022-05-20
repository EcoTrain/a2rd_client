import React, { useRef, useState } from "react";
import ScrollAnim from "rc-scroll-anim";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import { publicationsCardsInfo } from "./cardsConfig";

import "./gridCard.scss";
import "./lineGridCard.scss";

const ScrollOverPack = ScrollAnim.OverPack;

const HomePublications = () => {
  const pageRef = useRef();
  return (
    <Layout
      className="section section-darkWhite"
      id="homePublications"
      ref={pageRef}
    >
      <ScrollOverPack
        replay
        always={false}
        playScale={0}
        className="section-content"
        style={{flexDirection: 'column'}}
      >
        <div className="font-title-h1 text-center" style={{ marginTop: "3em" }}>
          Our publications
        </div>
        <div className="text-center" style={{ margin: "0px 2em" }}>
          At the A2 Research and Development lab, we are open to collaborating
          with investment companies and the research community, so some of our
          study results have already been published in scientific journals.
          Others are submitted for peer review.
        </div>
        <div className="gridCardsView lineGridCardsViewColumn">
          {publicationsCardsInfo.map((x, i) => renderCard(x, i))}
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
      onMouseLeave={onUnHover}
    >
      <div className="gridCard lineGridCard" onMouseEnter={onHover}>
        <div className="lineGridCardIcon">
          <a href={info.icon.link} target="_blank" rel="noreferrer">
            <img src={info.icon.src} alt={info.icon.alt} />
          </a>
        </div>

        <div className="gridCardView lineGridViewLeft">
          <div className="font-title-h3" style={{ textAlign: "left" }}>
            {info.title}
          </div>
          {hover && (
            <div className="gridCardViewLinkBtns">
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

export default HomePublications;
