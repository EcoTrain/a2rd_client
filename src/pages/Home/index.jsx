import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {scroller} from "react-scroll";
import {useTranslation} from "react-i18next";

import HomePreview from "./preview";
import HomeAbout from "./textSections/about";
import PageScroller from "../../components/Section/PageScroller";
import TextPage from "../../components/Section/TextPage";
import {textPageConfig} from "../../components/Section/TextPage/textPageConfig";

import HomeProjects from "./cardSections/projects";
import HomeStartups from "./cardSections/startups";
import HomePublications from "./cardSections/publications";
import Contacts from "./contacts";
import HomeStack from "./stack";

import "./home.scss";

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

      <HomeProjects title="navigation.projects" />
      <HomeStartups title="navigation.startups" />
      <HomePublications title="navigation.publications" />
      <HomeStack title="navigation.stack" />

      {/* <TextPage {...textPageConfig.home.businessModel} t={t} /> */}

      <Contacts title="navigation.contacts" />
    </PageScroller>
  );
};

export default Home;
