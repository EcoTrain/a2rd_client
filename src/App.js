import React, {useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import loadable from "@loadable/component";
import {ToastContainer} from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

const Header = loadable(() => import("./components/Header"), {
  fallback: <Waiter />,
});
const Home = loadable(() => import("./pages/Home"), {
  fallback: <Waiter />,
});
const About = loadable(() => import("./pages/About"), {
  fallback: <Waiter />,
});
const WellnessMonitor = loadable(() => import("./pages/WellnessMonitor"), {
  fallback: <Waiter />,
});
const ModelingMultiagent = loadable(
  () => import("./pages/Modeling/Multiagent"),
  {
    fallback: <Waiter />,
  }
);
const ModelingDistribution = loadable(
  () => import("./pages/Modeling/Distribution"),
  {
    fallback: <Waiter />,
  }
);
const Contacts = loadable(() => import("./pages/Contacts"), {
  fallback: <Waiter />,
});

import "./components/Toast.scss";
import "./App.scss";
import "./Text.scss";
import Waiter from "./components/Waiter";

// TODO: Waiter anim. Suspence main on init
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
        let viewHeight = screen.height * 0.9;
        let viewPort = document.querySelector("meta[name=viewport]");
        viewPort.setAttribute(
          "content",
          `height=${viewHeight}px, width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5`
        );
      }, 300);
    };
    import("react-device-detect").then(({isAndroid}) => {
      console.log({isAndroid});
      if (isAndroid) {
        setViewboxHeight();
        // screen.orientation.addEventListener("resize", setViewboxHeight);
        // screen.orientation.onchange = setViewboxHeight();
      }
    });
  }, []);

  return (
    <section>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/modeling/multiagent" element={<ModelingMultiagent />} />
        <Route
          path="/modeling/distribution"
          element={<ModelingDistribution />}
        />
        <Route path="/wellness/" element={<WellnessMonitor />} />
        <Route path="/wellness/:id" element={<WellnessMonitor />} />
        <Route path="/contacts/" element={<Contacts />} />
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
