import React, { useEffect } from "react";
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
import { projectsCardsInfo } from "../Home/cardSections/cardsConfig";

const { Content } = Layout;
const ScrollOverPack = ScrollAnim.OverPack;

const Projects = () => {
  const params = useParams();

  useEffect(() => {
    document.title = "A2RD Lab: Projects";
    params.id &&
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
  const { t } = useTranslation("projects");
  Project.propTypes = {
    item: {
      title: PropTypes.string,
      text: PropTypes.string,
      note: PropTypes.string,
    },
  };

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
      style={{ background: item.bg }}
    >
      <div className="section-content">
        <div className="section-content-block">
          <div className="font-title-h1 text-center">{t(item.title)}</div>
          <ScrollOverPack replay always={false} playScale={0}>
            {t(item.text)
              .split("\n")
              .map((x, i) => (
                <div key={i}>{getTextAnim(x, i)}</div>
              ))}
            {t(item.note)
              .split("\n")
              .map((x, i) => (
                <div key={i}>{getTextAnim(x, i)}</div>
              ))}
          </ScrollOverPack>
        </div>
      </div>
      <div className="section-img">
        <img src={item.icon} />
      </div>
    </Layout>
  );
};

export default Projects;
