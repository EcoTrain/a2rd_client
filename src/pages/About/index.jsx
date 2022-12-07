import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {scroller} from "react-scroll";
import {useTranslation} from "react-i18next";

import AboutPreview from "./about";
import PageScroller from "../../components/Section/PageScroller";
import TextPage from "../../components/Section/TextPage";
import {textPageConfig} from "../../components/Section/TextPage/textPageConfig";

import Projects from "./projects";
import Startups from "./startups";
import Publications from "./publications";
import Contacts from "../Contacts";
import HomeStack from "./stack";

import "./index.scss";
import Activities from "./activities";
import Solutions from "./solutions";

const About = () => {
  const params = useParams();
  const {t} = useTranslation(["home"]);

  useEffect(() => {
    params.id &&
      scroller.scrollTo(params.id, {
        duration: 0,
        smooth: "easeOutQuint",
      });
  }, []);

  return (
    <PageScroller t={t}>
      <AboutPreview title="navigation.about" />
      <Solutions />
      <Activities />
      <Projects title="navigation.projects" />
      <Startups title="navigation.startups" />
      <Publications title="navigation.publications" />
      <HomeStack title="navigation.stack" />
      {/* <Team /> */}

      {/* <TextPage {...textPageConfig.home.businessModel} t={t} /> */}

      <Contacts title="navigation.contacts" />
    </PageScroller>
  );
};

export default About;
