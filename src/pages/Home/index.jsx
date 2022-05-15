import React from "react";

import "antd/dist/antd.min.css";
import HomePreview from "./preview";
import HomeAbout from "./textSections/about";
import Header from "../../components/Header";
import PageScroller from "../../components/ScrollPage";

import "../Base/sections.scss";
import "./home.scss";

import HomeActivities from "./textSections/activities";
import HomeAnalytic from "./textSections/analytic";
import HomeContacts from "../Base/contacts";
import HomeFeedback from "./feedback";

const Home = () => {
  const items = [{ id: "/", label: "About Us" }].map((item) => ({
    key: `${item.id}`,
    label: `${item.label}`,
  }));

  return (
    <>
      <Header items={items} />
      <PageScroller>
        <HomePreview />
        <HomeAbout />
        <HomeActivities />
        <HomeAnalytic />
        <HomeFeedback />
        <HomeContacts />
      </PageScroller>
    </>
  );
};

export default Home;
