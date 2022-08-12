import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { isAndroid } from "react-device-detect";

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
  useEffect(() => {
    /* Для того чтобы контент не сжимался при появлении клавиатуры на Android
    Из-за сжатия onBlur переносит в середину страницы при ее "разжимании"
    Клавиатура на андроид меняет vh на высоту клавиатуры
    */
    const setViewboxHeight = () => {
      setTimeout(function () {
        let viewheight = window.innerHeight;
        let viewport = document.querySelector("meta[name=viewport]");
        const viewScale =
          "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0";
        viewport.setAttribute(
          "content",
          `height=${viewheight}px, ${viewScale}`
        );
      }, 300);
    };
    if (isAndroid) {
      screen.orientation.addEventListener("change", setViewboxHeight);
      // screen.orientation.onchange = setViewboxHeight();
    }
  }, []);

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
