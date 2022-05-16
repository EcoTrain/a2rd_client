import React, { useEffect, useRef } from "react";
import TextyAnim from "rc-texty";
import ScrollAnim from "rc-scroll-anim";
import { scroller } from "react-scroll";
import PropTypes from "prop-types";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import { splitTextByWords } from "../../fucntions/splitText";
import PageScroller from "../../components/ScrollPage";
import { useParams } from "react-router-dom";

const { Content } = Layout;
const ScrollOverPack = ScrollAnim.OverPack;

export const startupsCardsInfo = [
  {
    title: "Wellness Monitor",
    smallText:
      "intelligent assistant to support the quality of life, which allows for tracking the status of key health indicators and therapeutic protocols and support for people with special needs. ",
    text: "Wellness Monitor – intelligent assistant to support the quality of life, which allows for tracking the status of key health indicators and therapeutic protocols and support for people with special needs. The assistant is designed to support and accompany users and maintain communication with doctors, medical services, insurance, and other companies. You just need to register to use the assistant, which takes less than a minute. This assistant helps you monitor your health indicators, plan your treatment, nutrition, and medication program, and communicate with other users. Wellness Monitor is a part of the x-Health&Wellness framework – an interface for interaction with the medical sector (hospitals), insurance companies, airlines, and travel services. Our goal is to develop and maintain Wellness Monitor as a convenient intelligent assistant that provides a safe, fast, and reliable service of equal opportunities for all categories of users.",
    bg: "lightgrey",
    id: "startup_wm",
    links: [
      {
        title: "User Manual",
        link: "https://ecotrain.github.io/wellness_doc/",
      },
      {
        title: "Website",
        link: "https://wellness.a2rd.com/",
      },
    ],
  },
  {
    title: "x-Health&Wellness framework",
    smallText:
      "An ecosystem that brings together various services to make the life of users as productive as possible, freeing up time from worries for constant monitoring of health indicators and medical services",
    text: "The x-Health&Wellness framework is a specially developed ecosystem that combines various services (medicine, insurance, banks, tourism, air travel, restaurants) to make the users’ life most productive, freeing up time from worries for constant monitoring of health parameters and medical therapy. The x-Health&Wellness framework provides constant communication with the supervising doctor and the medical centre, allows you to safely travel to new countries, be confident in medical control and personalized support from medical services, restaurant services, and many others. User data is securely stored in the registry in encrypted form and is only accessible through authorized access to personalize therapy or diet and in the event of a sudden emergency.",
    bg: "lightsteelblue",
    id: "startup_xwm",
  },
  {
    title: "Urban airflows modeling",
    smallText:
      "Modeling of surface air flows and estimation of pollutant concentrations based on Lagrangian mathematics",
    text: "Surface airflows modeling and pollutant concentrations estimation are very complex processes requiring the development of unique mathematical models that consider regional features and many other factors. We use the best approaches to model and evaluate the negative impact of pollutants on the environment and public health by tracking them from the source to a specific point in space. The core of our solution is Lagrangian mathematics; technical solutions are implemented based on Python, C++, PostgreSQL, QGIS. We are ready to implement our solutions in the information environment of your company.",
    bg: "lightblue",
    id: "startup_atmos",
  },
];

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
