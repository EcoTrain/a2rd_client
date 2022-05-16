import React, { useEffect, useRef, useState } from "react";
import QueueAnim from "rc-queue-anim";
import { Layout } from "antd";
import "antd/dist/antd.min.css";
import useOnScreen from "../../../hooks/useOnScreen";
import "./cards.scss";

const cardsInfo = [
  {
    title: "Wellness Monitor",
    smallText: "intelligent assistant to support the quality of life, which allows for tracking the status of key health indicators and therapeutic protocols and support for people with special needs. ",
    text: "Wellness Monitor – intelligent assistant to support the quality of life, which allows for tracking the status of key health indicators and therapeutic protocols and support for people with special needs. The assistant is designed to support and accompany users and maintain communication with doctors, medical services, insurance, and other companies. You just need to register to use the assistant, which takes less than a minute. This assistant helps you monitor your health indicators, plan your treatment, nutrition, and medication program, and communicate with other users. Wellness Monitor is a part of the x-Health&Wellness framework – an interface for interaction with the medical sector (hospitals), insurance companies, airlines, and travel services. Our goal is to develop and maintain Wellness Monitor as a convenient intelligent assistant that provides a safe, fast, and reliable service of equal opportunities for all categories of users.",
    bg: "lightblue",
  },
  {
    title: "x-Health&Wellness framework",
    smallText: "An ecosystem that brings together various services to make the life of users as productive as possible, freeing up time from worries for constant monitoring of health indicators and medical services",
    text: "The x-Health&Wellness framework is a specially developed ecosystem that combines various services (medicine, insurance, banks, tourism, air travel, restaurants) to make the users’ life most productive, freeing up time from worries for constant monitoring of health parameters and medical therapy. The x-Health&Wellness framework provides constant communication with the supervising doctor and the medical centre, allows you to safely travel to new countries, be confident in medical control and personalized support from medical services, restaurant services, and many others. User data is securely stored in the registry in encrypted form and is only accessible through authorized access to personalize therapy or diet and in the event of a sudden emergency.",
    bg: "lightsteelblue",
  },
  {
    title: "Urban airflows modeling",
    smallText: "Modeling of surface air flows and estimation of pollutant concentrations based on Lagrangian mathematics",
    text: "Surface airflows modeling and pollutant concentrations estimation are very complex processes requiring the development of unique mathematical models that consider regional features and many other factors. We use the best approaches to model and evaluate the negative impact of pollutants on the environment and public health by tracking them from the source to a specific point in space. The core of our solution is Lagrangian mathematics; technical solutions are implemented based on Python, C++, PostgreSQL, QGIS. We are ready to implement our solutions in the information environment of your company.",
    bg: "lightgrey",
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
    setHover(true);
  };

  const onUnHover = () => {
    cardRef.current.style.background = null;
    cardRef.current.style.minWidth = "unset";
    setHover(false);
  };

  return (
    <div key={i} className="fullGridCardWrapper" ref={cardRef}>
      <div
        className="fullGridCard"
        onMouseEnter={onHover}
        onMouseLeave={onUnHover}
      >
        {!hover ? (
          <div className="fullGridCardPreview">
            <div className="font-title-h3">{info.title}</div>
            <div className="description">{info.smallText}</div>
          </div>
        ) : (
          <div className="fullGridCardView">
            <div className="font-title-h3">{info.title}</div>
            <div className="description">{info.text}</div>
          </div>
        )}
      </div>
    </div>
  );
};

const HomeStartups = () => {
  const pageRef = useRef();
  const onScreen = useOnScreen({ ref: pageRef, rootMargin: "-100px" });

  useEffect(() => {
    if (onScreen) {
      document.title = "A2RD Lab: Projects";
    }
  }, [onScreen]);

  return (
    <Layout className="section section-white" id="homeProjects" ref={pageRef}>
      <QueueAnim
        type={["left", "right"]}
        style={{ height: "100vh", display: "flex", "flex-direction": "column" }}
      >
        <div className="font-title-h1 text-center" style={{ marginTop: "2em" }}>
          Our startups
        </div>
        <div className="fullGridCardsView">
          {cardsInfo.map((x, i) => renderCard(x, i))}
        </div>
      </QueueAnim>
    </Layout>
  );
};

export default HomeStartups;
