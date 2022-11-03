import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {scroller} from "react-scroll";
import {useTranslation} from "react-i18next";

import PageScroller from "../../components/Section/PageScroller";

import TextPage from "../../components/Section/TextPage";
import {textPageConfig} from "../../components/Section/TextPage/textPageConfig";

import HomeProjects from "../Home/cardSections/projects";

const ModelingMultiagent = () => {
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
        {...textPageConfig.modeling.multiagent.about}
        position={"sticky"}
        t={t}
      />
      <TextPage
        {...textPageConfig.modeling.multiagent.capabilities}
        position={"sticky"}
        t={t}
      />
      <TextPage
        {...textPageConfig.modeling.multiagent.analysis}
        position={"sticky"}
        t={t}
      />
      <TextPage
        {...textPageConfig.modeling.multiagent.payload}
        position={"sticky"}
        t={t}
      />
      <HomeProjects
        filter={"multiagent"}
        text={t("multiagent.projects.text")}
      />
    </PageScroller>
  );
};

export default ModelingMultiagent;
