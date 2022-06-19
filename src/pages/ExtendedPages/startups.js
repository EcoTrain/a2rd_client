import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { scroller } from "react-scroll";
import PropTypes from "prop-types";
import { Trans, useTranslation } from "react-i18next";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import PageScroller from "../../components/ScrollPage";
import { startupsCardsInfo } from "../Home/cardSections/cardsConfig";

import "../../App.scss";

const Startups = () => {
  const params = useParams();

  useEffect(() => {
    document.title = "A2RD Lab: Startups";
    params.id &&
      scroller.scrollTo(params.id, {
        duration: 0,
        smooth: "easeOutQuint",
      });
  }, []);

  return (
    <PageScroller>
      {startupsCardsInfo.map((x, i) => (
        <Startup key={i} item={x} position={"sticky"} />
      ))}
    </PageScroller>
  );
};

const Startup = ({ item }) => {
  const { t } = useTranslation("startups");
  Startup.propTypes = {
    item: () => ({
      id: PropTypes.string,
      title: PropTypes.string,
      smallText: PropTypes.string,
      text: PropTypes.string,
      bg: PropTypes.string,
    }),
  };
  const pageRef = useRef();

  return (
    <Layout
      id={item.id}
      className="section splitSection section-lightGray"
      ref={pageRef}
      style={{ position: "sticky", top: 0, background: item.bg }}
    >
      <div className="section-content" style={{ paddingTop: 60 }}>
        <div className="section-content-block">
          <div className="section-title font-title-h1 text-center">
            {t(item.title)}
          </div>
          {t(item.text)
            .split("\n")
            .map((x, i) => (
              <div key={i} className="font-text-big description">
                <div>
                  <Trans
                    t={t}
                    i18nKey={x}
                    components={[
                      <a
                        key={`link${i}`}
                        href={item.url || ""}
                        target="_blank"
                        rel="noreferrer"
                      />,
                    ]}
                  />
                </div>
              </div>
            ))}
          <div className="linkBtnListWrapper">
            {item.links &&
              item.links.map((x, i) => (
                <button
                  key={i}
                  className="linkBtn"
                  onClick={() => window.open(x.link, "_blank")}
                >
                  {x.title}
                </button>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Startups;
