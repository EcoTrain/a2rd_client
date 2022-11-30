import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {scroller} from "react-scroll";
import {useTranslation} from "react-i18next";

import PageScroller from "../../components/Section/PageScroller";

import TextPage from "../../components/Section/TextPage";
import {textPageConfig} from "../../components/Section/TextPage/textPageConfig";

import Projects from "../About/projects";
import Contacts from "../Contacts";

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
        position={"sticky"}
        {...textPageConfig.modeling.multiagent.payload}
        t={t}
      />
      <Projects filter={"multiagent"} text={t("multiagent.projects.text")} />
      <Contacts />
    </PageScroller>
  );
};

export default ModelingMultiagent;
