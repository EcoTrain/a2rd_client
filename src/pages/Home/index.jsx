import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {scroller} from "react-scroll";
import {useTranslation} from "react-i18next";

import "antd/dist/antd.min.css";
import HomePreview from "./preview";
import HomeAbout from "./textSections/about";
import PageScroller from "../../components/ScrollPage";

import "./home.scss";

import TextPage from "../../components/TextPage";
import {textPageConfig} from "../../components/TextPage/textPageConfig";

import HomeProjects from "./cardSections/projects";
import HomeStartups from "./cardSections/startups";
import HomePublications from "./cardSections/publications";
import HomeFeedback from "./feedback";
import HomeContacts from "./contacts";

const Home = () => {
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
      <HomePreview />
      <HomeAbout title="navigation.about" />

      <TextPage position={"sticky"} {...textPageConfig.home.activities} t={t} />
      <TextPage position={"sticky"} {...textPageConfig.home.solutions} t={t} />
      <TextPage
        position={"sticky"}
        {...textPageConfig.home.medAssistant}
        t={t}
      />

      <HomeProjects title="navigation.projects" />
      <HomeStartups title="navigation.startups" />

      <HomePublications title="navigation.publications" />
      <TextPage {...textPageConfig.home.healthyLifestyle} t={t} />
      <TextPage {...textPageConfig.home.businessModel} t={t} />

      <HomeFeedback title="navigation.feedback" />
      <HomeContacts title="navigation.contacts" />
    </PageScroller>
  );
};

export default Home;
