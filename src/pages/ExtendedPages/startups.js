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
  const { t } = useTranslation("startups");
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
    <PageScroller t={t}>
      {startupsCardsInfo.map((x, i) => (
        <Startup key={i} item={x} position={"sticky"} t={t} />
      ))}
    </PageScroller>
  );
};

const Startup = ({ item, t }) => {
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
      <div className="section-content">
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
                        href={(item.links && item.links[0].link) || ""}
                        target="_blank"
                        rel="noreferrer"
                      />,
                    ]}
                  />
                </div>
              </div>
            ))}
          {item.links && (
            <div className="linkBtnListWrapper">
              {item.links.map((x, i) => (
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
    </Layout>
  );
};

export default Startups;
