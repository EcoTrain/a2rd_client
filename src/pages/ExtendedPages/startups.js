import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import TextyAnim from "rc-texty";
import ScrollAnim from "rc-scroll-anim";
import { scroller } from "react-scroll";
import PropTypes from "prop-types";
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
  Startup.propTypes = {
    item: {
      id: PropTypes.string,
      title: PropTypes.string,
      smallText: PropTypes.string,
      text: PropTypes.string,
      bg: PropTypes.string,
    },
  };
  const pageRef = useRef();

  return (
    <Layout
      id={item.id}
      className="section section-lightGray"
      ref={pageRef}
      style={{ position: "sticky", top: 0, background: item.bg }}
    >
      <Content className="section-content">
        <div className="section-content-text">
          <div className="font-title-h1 text-center">{item.title}</div>
          <ScrollOverPack replay always={false} playScale={0}>
            <TextyAnim
              className="description"
              type="bottom"
              split={splitTextByWords}
              delay={0}
              interval={10}
            >
              {item.text}
            </TextyAnim>
          </ScrollOverPack>
        </div>
        {/* <div className="section-content-img">
          <img src={process.env.PUBLIC_URL + "/static/images/city_logo.webp"} />
        </div> */}
      </Content>
    </Layout>
  );
};

export default Startups;
