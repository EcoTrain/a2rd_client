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

// console.log(process.env.NODE_ENV);

function App() {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/projects/:id"} element={<Projects />} />
        <Route path={"/startups/:id"} element={<Startups />} />
      </Routes>
    </Layout>
  );
}

export default App;
