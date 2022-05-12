import React, { useRef, useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "antd/dist/antd.min.css";

import Home from "./pages/Home";
import "./App.scss";

const { Footer } = Layout;

const MainFooter = () => {
  return <Footer className="footer">footer</Footer>;
};

function App() {
  return (
    <Layout className={"mainContainer"}>
      <Home />
      {/* <MainFooter /> */}
    </Layout>
  );
}

export default App;
