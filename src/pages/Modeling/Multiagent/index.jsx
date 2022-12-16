import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {scroller} from "react-scroll";
import {useTranslation} from "react-i18next";

import PageScroller from "../../../components/Section/PageScroller";


import Projects from "../../About/projects";
import Contacts from "../../Contacts";
import MultiagentIntro from "./intro";
import MultiagentCapabilities from "./capabilities";
import MultiagentPayload from "./solutions";
import MultiagentAnalysis from "./multicriteria";

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
      <MultiagentIntro title="Multi-agent" />
      <MultiagentAnalysis />
      <MultiagentCapabilities />
      <MultiagentPayload />
      <Projects filter={"multiagent"} text={t("multiagent.projects.text")} />
      <Contacts />
    </PageScroller>
  );
};

export default ModelingMultiagent;
