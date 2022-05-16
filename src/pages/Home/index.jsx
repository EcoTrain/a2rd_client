import React from "react";

import "antd/dist/antd.min.css";
import HomePreview from "./preview";
import HomeAbout from "./textSections/about";
import PageScroller from "../../components/ScrollPage";

import "../Base/sections.scss";
import "./home.scss";

import HomeActivities from "./textSections/activities";
import HomeAnalytic from "./textSections/analytic";
import HomeContacts from "../Base/contacts";
import HomeFeedback from "./feedback";
import HomeProjects from "./cardSections/projects";
import HomeStartups from "./cardSections/startups";

const Home = () => {
  return (
    <PageScroller>
      <HomePreview />
      <HomeAbout title="About" />
      <HomeActivities title="Activities" position={"sticky"} />
      <HomeAnalytic title="Analytic" position={"sticky"} />
      <HomeProjects title="Projects" />
      <HomeStartups title="Startups" />
      <HomeFeedback title="Feedback" />
      <HomeContacts title="Contacts" />
    </PageScroller>
  );
};

export default Home;
