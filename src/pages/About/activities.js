import React from "react";
import {useTranslation} from "react-i18next";

import ListPage from "../../components/Section/ListPage";

const config = {
  title: "activities.title",
  text: "activities.text",
  list: "activities.list",
  sectionTheme: "section-white",
};

const DistributionCapabilities = () => {
  const {t} = useTranslation("home");
  return <ListPage t={t} config={config} />;
};

export default DistributionCapabilities;
