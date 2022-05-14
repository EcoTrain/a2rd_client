import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import Home from "./pages/Home";
import "./App.scss";

function App() {
  return (
    <Layout className={"mainContainer"}>
      <Home />
    </Layout>
  );
}

export default App;
