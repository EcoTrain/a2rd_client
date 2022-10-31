import React, {useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import {isAndroid} from "react-device-detect";
import loadable from "@loadable/component";
import {ToastContainer} from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

const Home = loadable(() => import("./pages/Home"));
const Header = loadable(() => import("./components/Header"));
const Projects = loadable(() => import("./pages/ExtendedPages/projects"));
const Startups = loadable(() => import("./pages/ExtendedPages/startups"));
const WellnessMonitor = loadable(() => import("./pages/WellnessMonitor"));
const ModelingMultiagent = loadable(() =>
  import("./pages/Modeling/Multiagent")
);
const ModelingDistribution = loadable(() =>
  import("./pages/Modeling/Distribution")
);

import "./components/Toast.scss";
import "./App.scss";
import "./Text.scss";

function App() {
  // Change viewport
  useEffect(() => {
    /* Для того чтобы контент не сжимался при появлении клавиатуры на Android
    Из-за сжатия onBlur переносит в середину страницы при ее "разжимании"
    Клавиатура на андроид меняет vh на высоту клавиатуры
    */
    // TODO: Попробовать без viewScale на Android
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

  // Lazy load video (async)
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

      if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function (
          entries,
          observer
        ) {
          entries.forEach(function (video) {
            if (video.isIntersecting) {
              for (var source in video.target.children) {
                var videoSource = video.target.children[source];
                if (
                  typeof videoSource.tagName === "string" &&
                  videoSource.tagName === "SOURCE"
                ) {
                  videoSource.src = videoSource.dataset.src;
                }
              }

              video.target.load();
              video.target.classList.remove("lazy");
              lazyVideoObserver.unobserve(video.target);
            }
          });
        });

        lazyVideos.forEach(function (lazyVideo) {
          lazyVideoObserver.observe(lazyVideo);
        });
      }
    });
  }, []);

  // Lazy load image (async)
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

      if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function (
          entries,
          observer
        ) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              let lazyImage = entry.target;
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.srcset = lazyImage.dataset.srcset;
              lazyImage.classList.remove("lazy");
              lazyImageObserver.unobserve(lazyImage);
            }
          });
        });

        lazyImages.forEach(function (lazyImage) {
          lazyImageObserver.observe(lazyImage);
        });
      } else {
        // Possibly fall back to event handlers here
      }
    });
  }, []);

  return (
    <section>
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
        <Route path="/wellness/" element={<WellnessMonitor />} />
        <Route path="/wellness/:id" element={<WellnessMonitor />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        newestOnTop
        closeOnClick
        draggable
        pauseOnFocusLoss={false}
      />
    </section>
  );
}

export default App;
