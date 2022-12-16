import React from "react";
import {useTranslation} from "react-i18next";

import ListPage from "../../../components/Section/ListPage";

const config = {
  id: "activities",
  title: "distribution.capabilities.title",
  text: "distribution.capabilities.text",
  list: "distribution.capabilities.list",
  sectionTheme: "section-white",
};

const DistributionCapabilities = () => {
  const {t} = useTranslation("modeling");
  return <ListPage t={t} config={config} />;
};

export default DistributionCapabilities;
