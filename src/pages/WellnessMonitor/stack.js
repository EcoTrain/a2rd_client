import React from "react";
import {useTranslation} from "react-i18next";
import {Layout} from "antd";
import "antd/dist/antd.min.css";
import FilterGrid from "../../components/FilterGrid";

const TestWellnessStack = () => {
  const {t} = useTranslation("wellness");

  return (
    <Layout className="section section-white" id="wellnessStack">
      <div className="section-content">
        <div className="section-title font-title-h1 text-center">
          {t("stack.title")}
        </div>
        <div
          className="gridCardsView fixRowDirection"
          style={{padding: "0 2em"}}
        >
          <FilterGrid />
        </div>
      </div>
    </Layout>
  );
};

export default TestWellnessStack;
