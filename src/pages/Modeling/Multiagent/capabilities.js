import React from "react";
import {useTranslation} from "react-i18next";

import ListPage from "../../../components/Section/ListPage";

const config = {
  id: "activities",
  title: "multiagent.capabilities.title",
  text: "multiagent.capabilities.text",
  list: "multiagent.capabilities.list",
  sectionTheme: "section-darkWhite",
};

const MultiagentCapabilities = () => {
  const {t} = useTranslation("modeling");
  return <ListPage t={t} config={config} />;
};

export default MultiagentCapabilities;
