import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { scroller } from "react-scroll";

import "antd/dist/antd.min.css";
import PageScroller from "../../../components/ScrollPage";

import TextPage from "../../../components/TextPage";
import { textPageConfig } from "../../Home/textSections/textPageConfig";

import MultiagentAbout from "./about";
import HomeProjects from "../../Home/cardSections/projects";
import { useTranslation } from "react-i18next";

const ModelingMultiagent = () => {
  const params = useParams();
  const { t } = useTranslation(["modeling"]);

  useEffect(() => {
    params.id &&
      scroller.scrollTo(params.id, {
        duration: 0,
        smooth: "easeOutQuint",
      });
  }, []);

  return (
    <PageScroller t={t}>
      <TextPage {...textPageConfig.modeling.multiagent.about} t={t} />
      <TextPage {...textPageConfig.modeling.multiagent.targets} t={t} />
      <HomeProjects title="navigation.projects" filter={"multiagent"} text={t("multiagent.projects.text")}/>
    </PageScroller>
  );
};

export default ModelingMultiagent;
