import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { scroller } from "react-scroll";
import { useTranslation } from "react-i18next";

import PageScroller from "../../components/ScrollPage";
import { projectsCardsInfo } from "../Home/cardSections/cardsConfig";
import TextPage from "../../components/TextPage";

const Projects = () => {
  const { t } = useTranslation(["projects"]);
  const params = useParams();

  useEffect(() => {
    document.title = "A2RD Lab: Projects";
    params.id &&
      scroller.scrollTo(params.id, {
        duration: 0,
        smooth: "easeOutQuint",
      });
  }, []);

  return (
    <PageScroller t={t}>
      {projectsCardsInfo.map((pageConfig, i) => (
        <TextPage key={i} {...pageConfig} position={"sticky"} t={t} />
      ))}
    </PageScroller>
  );
};

export default Projects;
