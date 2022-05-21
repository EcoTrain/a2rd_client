import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { scroller } from "react-scroll";
import PropTypes from "prop-types";
import { Trans, useTranslation } from "react-i18next";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import PageScroller from "../../components/ScrollPage";
import { startupsCardsInfo } from "../Home/cardSections/cardsConfig";

const { Content } = Layout;

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
      className="section section-lightGray"
      ref={pageRef}
      style={{ position: "sticky", top: 0, background: item.bg }}
    >
      <div className="section-content-text center-block-1200">
        <div className="section-text-block">
          <div className="font-title-h1 text-center">{t(item.title)}</div>
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
        </div>
      </div>
    </Layout>
  );
};

/*
<div className="font-text-big description">
              <div>
                <Trans
                  t={t}
                  i18nKey={item.text}
                  components={[
                    <Link
                      to={item.url || ""}
                      key="link"
                      className="font-title-h3"
                    />,
                  ]}
                />
              </div>
            </div>
*/

export default Startups;
