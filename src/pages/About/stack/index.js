import React from "react";
import {useTranslation} from "react-i18next";

import CategoryIconHexGrid from "../../../components/CategoryIconGrid/Hex";
import {gridConfig} from "./gridConfig";

const HomeStack = () => {
  const {t} = useTranslation("shared");

  return (
    <section className="section section-white" id="stack">
      <div className="section-content">
        <div className="section-title font-size-2 font-title text-align-center">
          {t("navigation.stack")}
        </div>
        <div style={{padding: "0 2em"}}>
          <CategoryIconHexGrid config={gridConfig} />
        </div>
      </div>
    </section>
  );
};

export default HomeStack;
