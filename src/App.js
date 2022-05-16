import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import Home from "./pages/Home";
import Header from "./components/Header";
import Projects from "./pages/ExtendedPages/projects";

import "./App.scss";
import "./Text.scss";
import Startups from "./pages/ExtendedPages/startups";

console.log(process.env.NODE_ENV);
const baseUrl = process.env.NODE_ENV === "production" ? "/a2rd_react" : "";

function App() {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path={`${baseUrl}/`} element={<Home />} />
        <Route path={`${baseUrl}/projects`} element={<Projects />} />
        <Route path={`${baseUrl}/startups`} element={<Startups />} />
      </Routes>
    </Layout>
  );
}

export default App;
