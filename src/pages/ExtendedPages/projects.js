import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import TextyAnim from "rc-texty";
import ScrollAnim from "rc-scroll-anim";
import { scroller } from "react-scroll";
import PropTypes from "prop-types";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import { splitTextByWords } from "../../fucntions/splitText";
import PageScroller from "../../components/ScrollPage";
import { projectsCardsInfo } from "../Home/cardSections/cardsConfig";

const { Content } = Layout;
const ScrollOverPack = ScrollAnim.OverPack;

const Projects = () => {
  const params = useParams();
  console.log({ params });

  useEffect(() => {
    document.title = "A2RD Lab: Projects";
    scroller.scrollTo(params.id, {
      duration: 0,
      smooth: "easeOutQuint",
    });
  }, []);

  return (
    <PageScroller>
      {projectsCardsInfo.map((x, i) => (
        <Project key={i} item={x} position={"sticky"} />
      ))}
    </PageScroller>
  );
};

const Project = ({ item }) => {
  Project.propTypes = {
    item: {
      title: PropTypes.string,
      text: PropTypes.string,
      note: PropTypes.string,
    },
  };

  return (
    <Layout
      id={item.id}
      className="section section-lightGray"
      style={{ background: item.bg }}
    >
      <Content className="section-content">
        <div className="section-content-text center-block-1200">
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
            <TextyAnim
              className="description font-text-small"
              type="bottom"
              split={splitTextByWords}
              delay={0}
              interval={10}
            >
              {item.note}
            </TextyAnim>
          </ScrollOverPack>
        </div>
        <div className="section-content-img">
          <img src={item.icon} />
        </div>
      </Content>
    </Layout>
  );
};

export default Projects;
