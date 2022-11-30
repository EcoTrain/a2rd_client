import React, {useEffect, useRef, useState} from "react";
import ScrollAnim from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import {useTranslation} from "react-i18next";

import publicationsCardsInfo from "./config";

import "../../../components/CardPage/gridCard.scss";
import "../../../components/CardPage/lineGridCard.scss";
import "./index.scss";

const ScrollOverPack = ScrollAnim.OverPack;

const Publications = () => {
  const {t} = useTranslation(["home"]);
  return (
    <section className="section section-darkWhite" id="publications">
      <div className="section-content">
        <ScrollOverPack
          className="section-title font-size-2 font-title text-align-center"
          replay
          always={false}
          playScale={0.2}
        >
          <TweenOne animation={{opacity: 1}} style={{opacity: 0.001}}>
            {t("publications.title")}
          </TweenOne>
        </ScrollOverPack>
        <ScrollOverPack
          replay
          always={false}
          playScale={0.2}
          style={{marginBottom: "1rem", maxWidth: 900}}
        >
          <TweenOne
            className="description"
            animation={{opacity: 1}}
            style={{opacity: 0.001}}
          >
            {t("publications.label")}
          </TweenOne>
        </ScrollOverPack>
        <div className="gridCardsView lineGridCardsView">
          {publicationsCardsInfo.map((x, i) => renderCard(x, i, t))}
        </div>
        <a
          href="https://scholar.google.com/citations?hl=ru&user=c5EL0qQAAAAJ&view_op=list_works&sortby=pubdate"
          target="_blank"
          rel="noreferrer noopener"
          style={{margin: "1rem", fontWeight: "normal"}}
          aria-label={t("publications.google_scholar")}
          className={"btn-outline"}
        >
          {t("publications.google_scholar")}
        </a>
      </div>
    </section>
  );
};

const renderCard = (info, i, t) => {
  const cardRef = useRef();
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.transition = "background 0.2s ease-in-out";
    }
  }, [cardRef.current]);

  const onHover = () => {
    cardRef.current.style.background = "var(--lightGray)";
    setHover(true);
  };

  const onUnHover = () => {
    cardRef.current.style.background = null;
    setHover(false);
  };

  return (
    <ScrollOverPack
      key={i}
      className="gridCardWrapper"
      replay
      always={false}
      playScale={0.2}
      onMouseEnter={onHover}
      onMouseLeave={onUnHover}
    >
      <TweenOne
        ref={cardRef}
        className="gridCard"
        animation={{opacity: 1}}
        style={{opacity: 0.001}}
      >
        <div className="gridCardIcon">
          {info.icon ? (
            <a
              href={info.icon.link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={info.icon.alt}
            >
              <img
                className="linkIcon"
                src={info.icon.src}
                alt={info.icon.alt}
              />
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

        <div
          className="gridCardView lineGridViewLeft"
          style={{textAlign: "left"}}
        >
          <div className="font-size-4 font-title">{t(info.title)}</div>
          {info.journal && (
            <div style={{marginBottom: "0.5rem"}}>
              {t("journal")}: {info.journal}
            </div>
          )}
          {hover && (
            <div className="btnListWrapper">
              {info.links &&
                Object.values(info.links).map((x, i) => (
                  <button
                    key={i}
                    className="btn-outline btn-anim"
                    onClick={() => window.open(x.link, "_blank")}
                  >
                    {t(x.title)}
                  </button>
                ))}
            </div>
          )}
        </div>
      </TweenOne>
    </ScrollOverPack>
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

export default Publications;
