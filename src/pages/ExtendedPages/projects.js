import React, { useEffect, useRef } from "react";
import TextyAnim from "rc-texty";
import ScrollAnim from "rc-scroll-anim";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import { splitTextByWords } from "../../fucntions/splitText";
import PageScroller from "../../components/ScrollPage";

const { Content } = Layout;
const ScrollOverPack = ScrollAnim.OverPack;

export const projectsCardsInfo = [
  {
    title: "Airflow and tracking pollutant emissions modelling",
    text: "Computational modelling for pollutant tracking in complex urban terrains, evaluating the contributions of sources. Our models precisely count the influence of meteorological factors and landscape; we work with 40 by 40 km domains and have a positive experience with modelling up to 3 km above the ground",
    note: "(air quality)",
    icon:
      process.env.PUBLIC_URL +
      "/static/images/index/projects/airflow_emissions.webp",
    bg: "lightblue",
    color: "white",
  },
  {
    title: "Transport systems modelling",
    text: "Railway complexes and autonomous transport simulation modelling for the quarries and port infrastructure. Through computational modelling, we provide an audit and selection of optimal solutions for the modernization of the road infrastructure of quarries in order to reduce negative environmental and economic costs.",
    note: "",
    icon:
      process.env.PUBLIC_URL +
      "/static/images/index/projects/transport_system.webp",
    bg: "lightsteelblue",
    color: "white",
  },
  {
    title: "Trends analysis",
    text: "Review of modern trends and promising projects focused on global sustainable development challenges. We prepare analytics based on preliminary and thematic processing of satellite data, industrial databases, corporate reports, scientific publications, and targeted computational modelling for consumers.",
    note: "",
    icon: process.env.PUBLIC_URL + "/static/images/index/projects/trends.webp",
    bg: "wheat",
    color: "black",
  },
  {
    title: "Energy transition modelling",
    text: "Comparative modelling of the transfer of open-pit mine diesel locomotives to all-electric traction based on lithium batteries.",
    note: "(zero on-site emissions; especially relevant for the markets of Asia and Oceania)",
    icon:
      process.env.PUBLIC_URL + "/static/images/index/projects/locomotives.webp",
    bg: "darkgrey",
    color: "black",
  },
];

const Projects = () => {
  useEffect(() => {
    document.title = "A2RD Lab: Projects";
  }, []);

  return (
    <PageScroller>
      {projectsCardsInfo.map((x, i) => (
        <Project key={i} item={x} sticky={true} />
      ))}
    </PageScroller>
  );
};

const Project = ({ item }) => {
  const pageRef = useRef();
  return (
    <Layout
      className="section section-lightGray"
      ref={pageRef}
      style={{ position: "sticky", top: 0 }}
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
        <div className="section-content-img">
          <img src={process.env.PUBLIC_URL + "/static/images/city_logo.webp"} />
        </div>
      </Content>
    </Layout>
  );
};

export default Projects;
