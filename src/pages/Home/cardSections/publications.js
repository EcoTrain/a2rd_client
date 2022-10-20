import React, {useRef, useState} from "react";
import ScrollAnim from "rc-scroll-anim";
import {useTranslation} from "react-i18next";
import {Layout} from "antd";
import "antd/dist/antd.min.css";

import {publicationsCardsInfo} from "./cardsConfig";

import "../../../components/CardPage/gridCard.scss";
import "../../../components/CardPage/lineGridCard.scss";

const ScrollOverPack = ScrollAnim.OverPack;

const HomePublications = () => {
  const {t} = useTranslation("home");
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
        style={{height: "100%"}}
      >
        <div
          className="section-title font-title-h1 text-center"
          style={{marginTop: "1em"}}
        >
          {t("publications.title")}
        </div>
        <div className="text-center" style={{margin: "0px 2em"}}>
          {t("publications.label")}
        </div>
        <div className="gridCardsView lineGridCardsViewColumn">
          {publicationsCardsInfo.map((x, i) => renderCard(x, i))}
        </div>
        <div style={{margin: "2em 1em 3em 1em"}}>
          <a
            href="https://scholar.google.com/citations?hl=ru&user=c5EL0qQAAAAJ&view_op=list_works&sortby=pubdate"
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("publications.google_scholar")}
          </a>
        </div>
      </ScrollOverPack>
    </Layout>
  );
};

const renderCard = (info, i) => {
  const {t} = useTranslation("home");
  const cardRef = useRef();
  const [hover, setHover] = useState(false);

  const onHover = () => {
    if (cardRef.current) {
      cardRef.current.style.background = "var(--lightGray)";
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
          {info.icon ? (
            <a href={info.icon.link} target="_blank" rel="noreferrer">
              <img className="linkIcon" src={info.icon.src} alt={info.icon.alt} />
            </a>
          ) : (
            <PreprintPlugSvg
              alt={"The article is in the process of being published"}
              style={{
                height: "50%",
                width: "50%",
                fill: "var(--coldGray)",
              }}
            />
          )}
        </div>

        <div className="gridCardView lineGridViewLeft">
          <div className="font-title-h3" style={{textAlign: "left"}}>
            {t(info.title)}
          </div>
          {hover && info.journal && (
            <div>
              {t("journal")}: {info.journal}
            </div>
          )}
          {hover && (
            <div className="linkBtnListWrapper">
              {info.links &&
                info.links.map((x, i) => (
                  <button
                    key={i}
                    className="linkBtn"
                    onClick={() => window.open(x.link, "_blank")}
                  >
                    {t(x.title)}
                  </button>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const PreprintPlugSvg = (props) => (
  <svg
    viewBox="0 0 32.857 32.857"
    style={{
      enableBackground: "new 0 0 32.857 32.857",
    }}
    {...props}
  >
    <title>{props.alt}</title>
    <path d="M16.428 32.857C7.369 32.857 0 25.489 0 16.432 0 7.371 7.369 0 16.428 0c9.06 0 16.43 7.371 16.43 16.432-.001 9.057-7.371 16.425-16.43 16.425zm0-31.857C7.921 1 1 7.923 1 16.432c0 8.506 6.921 15.426 15.428 15.426 8.508 0 15.43-6.92 15.43-15.426C31.857 7.923 24.936 1 16.428 1z" />
    <path d="M11.65 22.701a.5.5 0 0 1-.384-.819l4.662-5.63V6.844a.5.5 0 0 1 1 0v9.588a.503.503 0 0 1-.115.319l-4.777 5.77a.5.5 0 0 1-.386.18z" />
  </svg>
);

export default HomePublications;
