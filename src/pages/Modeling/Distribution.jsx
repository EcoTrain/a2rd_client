import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {scroller} from "react-scroll";
import {useTranslation} from "react-i18next";

import PageScroller from "../../components/ScrollPage";

import TextPage from "../../components/TextPage";
import {textPageConfig} from "../../components/TextPage/textPageConfig";

import HomeProjects from "../Home/cardSections/projects";

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
      <TextPage
        {...textPageConfig.modeling.distribution.about}
        position={"sticky"}
        t={t}
      />
      <TextPage
        {...textPageConfig.modeling.distribution.capabilities}
        position={"sticky"}
        t={t}
      />
      <TextPage
        {...textPageConfig.modeling.distribution.tools}
        position={"sticky"}
        t={t}
      />
      <HomeProjects
        filter={"distribution"}
        text={t("distribution.projects.text")}
      />
    </PageScroller>
  );
};

export default ModelingDistribution;
