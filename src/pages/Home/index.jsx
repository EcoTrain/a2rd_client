import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { scroller } from "react-scroll";

import "antd/dist/antd.min.css";
import HomePreview from "./preview";
import HomeAbout from "./textSections/about";
import PageScroller from "../../components/ScrollPage";

import "./home.scss";

import HomeTextPage from "./textSections/TextPage";
import { textPageConfig } from "./textSections/textPageConfig";

import HomeActivities from "./textSections/activities";
import HomeProjects from "./cardSections/projects";
import HomeStartups from "./cardSections/startups";
import HomePublications from "./cardSections/publications";
import HomeFeedback from "./feedback";
import HomeContacts from "./contacts";

const Home = () => {
  const params = useParams();

  useEffect(() => {
    params.id &&
      scroller.scrollTo(params.id, {
        duration: 0,
        smooth: "easeOutQuint",
      });
  }, []);

  return (
    <PageScroller>
      <HomePreview />
      <HomeAbout title="pages.about" />

      <HomeActivities title="pages.activities" position={"sticky"} />
      <HomeTextPage position={"sticky"} {...textPageConfig.analytic} />
      <HomeTextPage position={"sticky"} {...textPageConfig.solutions} />
      <HomeTextPage position={"sticky"} {...textPageConfig.medAssistant} />

      <HomeProjects title="pages.projects" />
      <HomeStartups title="pages.startups" />

      <HomePublications title="pages.publications" />
      <HomeTextPage {...textPageConfig.businessModel} />

      <HomeFeedback title="pages.feedback" position={"sticky"} />
      <HomeContacts title="pages.contacts" />
    </PageScroller>
  );
};

export default Home;
