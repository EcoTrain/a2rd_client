import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "antd";
import "antd/dist/antd.min.css";

import Home from "./pages/Home";
import Header from "./components/Header";
import Projects from "./pages/ExtendedPages/projects";

import "./App.scss";
import "./Text.scss";
import Startups from "./pages/ExtendedPages/startups";

import ModelingMultiagent from "./pages/Modeling/Multiagent";
import ModelingDistribution from "./pages/Modeling/Distribution";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./components/Toast.scss";

function App() {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Home />} />
        <Route path="/projects/" element={<Projects />} />
        <Route path="/projects/:id" element={<Projects />} />
        <Route path="/startups/" element={<Startups />} />
        <Route path="/startups/:id" element={<Startups />} />
        <Route path="/modeling/multiagent" element={<ModelingMultiagent />} />
        <Route
          path="/modeling/distribution"
          element={<ModelingDistribution />}
        />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        newestOnTop
        closeOnClick
        draggable
        pauseOnFocusLoss={false}
      />
    </Layout>
  );
}

export default App;
