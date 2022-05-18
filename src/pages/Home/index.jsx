import React from "react";

import "antd/dist/antd.min.css";
import HomePreview from "./preview";
import HomeAbout from "./textSections/about";
import PageScroller from "../../components/ScrollPage";

import "../Base/sections.scss";
import "./home.scss";

import HomeTextPage from "./textSections/TextPage";
import { textPageConfig } from "./textSections/textPageConfig";

import HomeActivities from "./textSections/activities";
import HomeFeedback from "./feedback";
import HomeProjects from "./cardSections/projects";
import HomeStartups from "./cardSections/startups";
import HomePublications from "./cardSections/publications";
import HomeContacts from "./contacts";

const Home = () => {
  return (
    <PageScroller>
      <HomePreview />
      <HomeAbout title="About" />

      <HomeActivities title="Activities" position={"sticky"} />
      <HomeTextPage position={"sticky"} {...textPageConfig.analytic} />
      <HomeTextPage position={"sticky"} {...textPageConfig.solutions} />
      <HomeTextPage position={"sticky"} {...textPageConfig.medAssistant} />

      <HomeProjects title="Projects" />
      <HomeStartups title="Startups" />

      <HomePublications title="Publications" />
      <HomeTextPage position={"sticky"} {...textPageConfig.businessModel} />

      <HomeFeedback title="Feedback" position={"sticky"} />
      <HomeContacts title="Contacts" />
    </PageScroller>
  );
};

export default Home;
