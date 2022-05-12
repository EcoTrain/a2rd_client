import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.min.css";
import "./about.scss";

const { Content } = Layout;

const HomeAbout = ({id}) => {
  return (
    <Layout className="section" id={id}>
      <Content className="card">
        <div className="previewTitle">A2RD</div>
        <div className="previewText">Test site</div>
      </Content>
    </Layout>
  );
};

export default HomeAbout;
