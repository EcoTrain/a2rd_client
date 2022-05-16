import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import Home from "./pages/Home";
import Header from "./components/Header";
import "./App.scss";
import "./Text.scss";

console.log(process.env.NODE_ENV);
const baseUrl = process.env.NODE_ENV === "production" ? "/a2rd_react" : "";

function App() {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path={`${baseUrl}/`} element={<Home />} />
        <Route path={`${baseUrl}/projects`} element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
