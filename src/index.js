import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

import {I18nextProvider} from "react-i18next";
import i18n from "./i18n";

import reportWebVitals from "./reportWebVitals";
import App from "./App";

import ThemeProvider from "./contexts/ThemeContext";

if (process.env.NODE_ENV === "production") {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basemname={`/${process.env.PUBLIC_URL}`}>
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </BrowserRouter>
);

reportWebVitals();
