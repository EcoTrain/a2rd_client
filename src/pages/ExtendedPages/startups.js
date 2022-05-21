import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import TextyAnim from "rc-texty";
import ScrollAnim from "rc-scroll-anim";
import { scroller } from "react-scroll";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import { splitTextByWords } from "../../fucntions/splitText";
import PageScroller from "../../components/ScrollPage";
import { startupsCardsInfo } from "../Home/cardSections/cardsConfig";

const { Content } = Layout;
const ScrollOverPack = ScrollAnim.OverPack;

const Startups = () => {
  const params = useParams();

  useEffect(() => {
    document.title = "A2RD Lab: Startups";
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

  const getTextAnim = (text, i) => (
    <TextyAnim
      className="font-text-big description"
      type="bottom"
      split={splitTextByWords}
      delay={i * 300}
      duration={300}
      interval={10}
    >
      {text}
    </TextyAnim>
  );

  return (
    <Layout
      id={item.id}
      className="section section-lightGray"
      ref={pageRef}
      style={{ position: "sticky", top: 0, background: item.bg }}
    >
      <Content className="section-content">
        <div className="section-content-text center-block-1200">
          <div className="section-text-block">
            <div className="font-title-h1 text-center">{t(item.title)}</div>
            <ScrollOverPack replay always={false} playScale={0}>
              {t(item.text)
                .split("\n")
                .map((x, i) => (
                  <div key={i}>{getTextAnim(x, i)}</div>
                ))}
            </ScrollOverPack>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Startups;
