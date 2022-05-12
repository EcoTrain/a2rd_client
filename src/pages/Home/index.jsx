import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.min.css";
import HomePreview from "./preview";
import HomeAbout from "./about";


const Home = () => {
  return (
    <Layout>
      <HomePreview />
      <HomeAbout />
    </Layout>
  );
};
export default Home;
