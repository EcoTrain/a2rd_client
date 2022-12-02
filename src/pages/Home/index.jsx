import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {scroller} from "react-scroll";
import {useTranslation} from "react-i18next";

import HomePreview from "./preview";
import PageScroller from "../../components/Section/PageScroller";

import Projects from "../About/projects";
import Startups from "../About/startups";
import Publications from "../About/publications";
import HomeStack from "../About/stack";
import Contacts from "../Contacts";

import "./home.scss";
import {OurAim} from "./aim";

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
      <OurAim />

      <Projects title="navigation.projects" />
      <Startups title="navigation.startups" />
      <Publications title="navigation.publications" />
      <HomeStack title="navigation.stack" />
      {/* <Team /> */}

      <Contacts title="navigation.contacts" />
    </PageScroller>
  );
};

export default Home;
