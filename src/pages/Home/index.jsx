import React from "react";

import "antd/dist/antd.min.css";
import HomePreview from "./preview";
import HomeAbout from "./about";
import Header from "../../components/Header";
import PageScroller from "../../components/ScrollPage";

import "./home.scss";

const Home = () => {
  const items = [
    { id: "homeSection", label: "Home" },
    { id: "homeAboutSection", label: "About" },
  ].map((item) => ({
    key: `${item.id}`,
    label: `${item.label}`,
  }));

  return (
    <>
      <Header items={items} />
      <PageScroller id={"homeSection"}>
        <HomePreview />
        <HomeAbout />
        <HomeAbout />
        <HomeAbout />
      </PageScroller>
    </>
  );
};

export default Home;
