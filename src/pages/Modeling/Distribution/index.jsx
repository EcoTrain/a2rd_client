import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {scroller} from "react-scroll";
import {useTranslation} from "react-i18next";

import PageScroller from "../../../components/Section/PageScroller";

import Projects from "../../About/projects";
import Contacts from "../../Contacts";
import DistributionIntro from "./intro";
import DistributionCapabilities from "./capabilities";
import DistributionSolution from "./solutions";

const ModelingDistribution = () => {
  const params = useParams();
  const {t} = useTranslation(["modeling"]);

  useEffect(() => {
    params.id &&
      scroller.scrollTo(params.id, {
        duration: 0,
        smooth: "easeOutQuint",
      });
  }, []);

  return (
    <PageScroller t={t}>
      <DistributionIntro title="Particle distribution"/>
      <DistributionSolution />
      <DistributionCapabilities />
      <Projects
        filter={"distribution"}
        text={t("distribution.projects.text")}
      />
      <Contacts />
    </PageScroller>
  );
};

export default ModelingDistribution;
