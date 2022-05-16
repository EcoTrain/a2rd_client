import React, { useEffect, useRef, useState } from "react";
import QueueAnim from "rc-queue-anim";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import useOnScreen from "../../../hooks/useOnScreen";

import "./gridCard.scss";

const cardsInfo = [
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

const renderCard = (info, i) => {
  const cardRef = useRef();
  const [hover, setHover] = useState(false);

  const onHover = () => {
    // cardRef.current.style.background = `url(${info.icon})`;
    cardRef.current.style.background = info.bg;
    cardRef.current.style.minWidth = "300px";
    cardRef.current.style.transition = "min-width 1.5s linear;";
    cardRef.current.style.color = "black";
    setHover(true);
  };

  const onUnHover = () => {
    cardRef.current.style.background = `url(${info.icon})  no-repeat center center / cover`;
    cardRef.current.style.minWidth = "unset";
    cardRef.current.style.color = info.color;
    setHover(false);
  };

  return (
    <div
      key={i}
      className="gridCardWrapper"
      ref={cardRef}
      style={{
        background: `url(${info.icon})  no-repeat center center / cover`,
        color: info.color,
      }}
    >
      <div className="gridCard" onMouseEnter={onHover} onMouseLeave={onUnHover}>
        {!hover ? (
          <div className="gridCardPreview">
            {/* <div className="gridCardImg">
              <img src={info.icon} />
            </div> */}
            <div className="font-title-h1">{info.title}</div>
          </div>
        ) : (
          <div className="gridCardView">
            <div className="font-title-h3">{info.title}</div>
            <div className="description">{info.text}</div>
          </div>
        )}
      </div>
    </div>
  );
};

const HomeProjects = () => {
  const pageRef = useRef();
  const onScreen = useOnScreen({ ref: pageRef, rootMargin: "-100px" });

  useEffect(() => {
    if (onScreen) {
      document.title = "A2RD Lab: Projects";
    }
  }, [onScreen]);

  return (
    <Layout
      className="section section-lightGray"
      id="homeProjects"
      ref={pageRef}
    >
      <QueueAnim
        type={["left", "right"]}
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div className="font-title-h1 text-center" style={{ marginTop: "2em" }}>
          Our projects
        </div>
        <div className="text-center">
          At the A2 Research and Development lab, we provide analytics,
          cutting-edge reviews, and models to optimize the operating companies
          processes concerning industry specifics, focusing on the best
          available and future-oriented solutions considering ESG and SDG
          trends.
        </div>
        <div className="gridCardsView" style={{ marginTop: "1em" }}>
          {cardsInfo.map((x, i) => renderCard(x, i))}
        </div>
      </QueueAnim>
    </Layout>
  );
};

export default HomeProjects;
