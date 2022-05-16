import React, { useEffect, useState } from "react";
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

const disableScrollBounce = () => {
  const [target, setTarget] = useState();
  window.addEventListener("touchstart", (e) => {
    setTarget(e.target.offsetParent);
  });

  window.addEventListener("touchmove", (e) => {
    if (e.target.offsetParent != target) {
      // e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 100);
    }
  });
};
const disableWheelScrollBounce = () => {
  let y = 0;
  document.body.addEventListener("wheel", (e) => {
    const height = document.body.offsetHeight;
    y = y + e.wheelDeltaY;
    if (y < -height + window.innerHeight) {
      y = -height + window.innerHeight;
    }
    if (y > 0) y = 0;
    const tr = `translateY(${y}px)`;
    document.body.style.transform = tr;
  });
};

function App() {
  disableScrollBounce();
  disableWheelScrollBounce();

  return (
    <Layout>
      <Header />
      <Routes>
        <Route path={`${baseUrl}/`} element={<Home />} />
        <Route path={`${baseUrl}/projects/:id`} element={<Projects />} />
        <Route path={`${baseUrl}/startups/:id`} element={<Startups />} />
      </Routes>
    </Layout>
  );
}

export default App;
