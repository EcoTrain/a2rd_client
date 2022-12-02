import React from "react";
import {useTranslation} from "react-i18next";
import {StartupPage} from "./startupPage";

const WellnessAbout = () => {
  const {t} = useTranslation(["wellness"]);

  const config = {
    // title: "about.title",
    text: "about.text",
    bg: "var(--darkWhite)",
    links: {
      manual: {
        title: "links.manual",
        link: "https://ecotrain.github.io/WM_doc/",
      },
      website: {
        title: "links.website",
        link: "https://wellness.a2rd.com/",
      },
    },
  };

  return (
    // TODO: change config format: list -> dict
    <div id="wellnessAbout">
      <StartupPage item={config} t={t} />
    </div>
  );
};

export default WellnessAbout;
