import React from "react";
import {useTranslation} from "react-i18next";
import {Layout} from "antd";
import "antd/dist/antd.min.css";
import LogoGrid from "../../../components/LogoGrid";
import {assets} from "../../../assets";

const HomeCustomers = () => {
  const {t} = useTranslation("shared");
  const imageSourceList = Object.values(assets.customers);

  return (
    <Layout className="section section-white" id="homeStack">
      <div className="section-content">
        <div className="section-title font-title-h1 text-center">
          {t("navigation.stack")}
        </div>
        <div
          className="gridCardsView fixRowDirection"
          style={{padding: "0 2em"}}
        >
          <LogoGrid imageSourceList={imageSourceList} />
        </div>
      </div>
    </Layout>
  );
};

export default HomeCustomers;
