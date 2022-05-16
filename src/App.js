import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import Home from "./pages/Home";
import Header from "./components/Header";
import "./App.scss";
import "./Text.scss";

function App() {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
