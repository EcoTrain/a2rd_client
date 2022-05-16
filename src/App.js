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
import { baseUrl } from "./config.js";

console.log(process.env);

console.log({ baseUrl });
function App() {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path={`${baseUrl}/`} element={<Home />} />
        <Route path={`${baseUrl}/projects/`} element={<Projects />} />
        <Route path={`${baseUrl}/projects/:id`} element={<Projects />} />
        <Route path={`${baseUrl}/startups/`} element={<Startups />} />
        <Route path={`${baseUrl}/startups/:id`} element={<Startups />} />
      </Routes>
    </Layout>
  );
}

export default App;
