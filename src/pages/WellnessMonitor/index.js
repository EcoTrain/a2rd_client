import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {scroller} from "react-scroll";
import {useTranslation} from "react-i18next";

import WellnessIntro from "./intro";
import WellnessTeam from "./cardSections/team";
import WellnessAbout from "./about";
import WellnessFunctional from "./cardSections/functional";
import WellnessStack from "./stack";

import PageScroller from "../../components/Section/PageScroller";
import TextPage from "../../components/Section/TextPage";
import {textPageConfig} from "../../components/Section/TextPage/textPageConfig";
import Contacts from "../Home/contacts";

const WellnessMonitor = () => {
  const params = useParams();
  const {t} = useTranslation(["wellness"]);

  useEffect(() => {
    params.id &&
      scroller.scrollTo(params.id, {
        duration: 0,
        smooth: "easeOutQuint",
      });
  }, []);

  return (
    <PageScroller t={t}>
      <WellnessIntro />
      <WellnessAbout />
      <WellnessFunctional />
      <WellnessStack />
      <TextPage {...textPageConfig.wellness.healthyLifestyle} t={t} />
      <WellnessTeam />
      <Contacts title="navigation.contacts" />
    </PageScroller>
  );
};

export default WellnessMonitor;
