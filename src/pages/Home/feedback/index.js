import React, {useRef, useState, useEffect} from "react";
import QueueAnim from "rc-queue-anim";
import {css} from "@emotion/react";
import ClockLoader from "react-spinners/ClockLoader";
import {useTranslation} from "react-i18next";


import {toast} from "react-toastify";

import "./feedback.scss";
import FormField from "./FormField";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: black;
`;

const HomeFeedback = () => {
  const {t} = useTranslation("feedback");
  const isMobile = window.innerWidth < 960;
  const imgMin =
    process.env.PUBLIC_URL + "/static/images/index/sections/min/feedback.webp";
  const imgMax =
    process.env.PUBLIC_URL + "/static/images/index/sections/max/feedback.webp";

  const [img, setImg] = useState(isMobile ? imgMin : imgMax);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  let [loading, setLoading] = useState(false);

  const handleResize = () => {
    setImg(isMobile ? imgMin : imgMax);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return window.addEventListener("resize", null);
  }, []);

  const isFormValid = () => {
    const validateEmail = (email) => {
      return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    };

    if (!email || !name || !text) {
      toast.error(t("feedback.validate.fillAll"));
      return false;
    } else if (!validateEmail(email)) {
      toast.error(t("feedback.validate.incorrectEmail"));
      return false;
    } else return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const onSuccess = () => {
      // console.log("Feedback result", res);
      setEmail("");
      setName("");
      setText("");
      toast.success(t("feedback.success"));
    };

    const onError = (err) => {
      console.log("Feedback error", err);
      toast.error(t("feedback.fail"));
    };

    const url = +"/api/send_email";
    const body = {
      email,
      name,
      text,
    };

    if (isFormValid()) {
      setLoading(true);
      fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(body),
      })
        .then(onSuccess)
        .catch(onError)
        .finally(() => setLoading(false));
    }
  };

  const getForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <FormField
          tag={"input"}
          title={t("feedback.field.email")}
          type={"email"}
          value={email}
          onChange={setEmail}
        />
        <FormField
          tag={"input"}
          title={t("feedback.field.name")}
          type={"name"}
          value={name}
          onChange={setName}
        />
        <FormField
          tag={"textarea"}
          title={t("feedback.field.text")}
          type={"text"}
          value={text}
          onChange={setText}
        />
        <input type="submit" value={t("feedback.submit")} />
      </form>
    );
  };

  return (
    <section className="section splitSection" id="homeFeedback">
      <div className="section-content section-darkWhite">
        <div className="section-content-block">
          <div className="section-title font-title-h1 text-center">
            {t("feedback.title")}
          </div>
          <QueueAnim type={["left", "right"]} id="feedback">
            <div className="description">{t("feedback.label")}</div>
            {getForm()}
            {loading && (
              <div className="waiter">
                <ClockLoader
                  color={"black"}
                  loading={loading}
                  css={override}
                  size={100}
                />
              </div>
            )}
          </QueueAnim>
        </div>
      </div>
      <div className="section-img">
        <img src={img} alt={t("feedback.label")} title={t("feedback.title")} />
      </div>
    </section>
  );
};

export default HomeFeedback;
