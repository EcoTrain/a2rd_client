import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {scroller} from "react-scroll";
import {useTranslation} from "react-i18next";

import PageScroller from "../../components/Section/PageScroller";

import TextPage from "../../components/Section/TextPage";
import {textPageConfig} from "../../components/Section/TextPage/textPageConfig";

import Projects from "../About/projects";
import Contacts from "../Contacts";

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
      <Projects
        filter={"distribution"}
        text={t("distribution.projects.text")}
      />
      <Contacts />
    </PageScroller>
  );
};

export default ModelingDistribution;
