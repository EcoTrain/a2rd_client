import React from "react";
import {useTranslation} from "react-i18next";
import {Startup} from "../ExtendedPages/startups";

const WellnessAbout = () => {
  const {t} = useTranslation(["wellness"]);

  const config = {
    title: "about.title",
    shortText: "about.shortText",
    text: "about.text",
    bg: "var(--darkWhite)",
    id: "startup_wm",
    links: [
      {
        title: "links.manual",
        link: "https://ecotrain.github.io/WM_doc/",
      },
      {
        title: "links.website",
        link: "https://wellness.a2rd.com/",
      },
    ],
  };

  return (
    // TODO: change config format: list -> dict
    <div id="wellnessAbout">
      <Startup item={config} t={t} />
    </div>
  );
};

export default WellnessAbout;
