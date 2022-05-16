import React, { useEffect, useRef, useState } from "react";
import QueueAnim from "rc-queue-anim";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import useOnScreen from "../../../hooks/useOnScreen";
import "./feedback.scss";

const { Content } = Layout;

const HomeFeedback = () => {
  const pageRef = useRef();
  const onScreen = useOnScreen({ ref: pageRef, rootMargin: "-50px" });

  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [text, setText] = useState();

  useEffect(() => {
    if (onScreen) {
      document.title = "A2RD Lab: Feedback";
    }
  }, [onScreen]);

  const handleSubmit = (event) => {
    alert("Feedback sent");
    event.preventDefault();
  };

  return (
    <Layout
      className="section section-lightGray"
      id="homeFeedback"
      ref={pageRef}
    >
      <Content className="section-content">
        <div className="section-content-img">
          <img src={process.env.PUBLIC_URL + "/static/images/city_logo.webp"} />
        </div>
        <div className="section-content-text">
          <div className="font-title-h1 text-center">Feedback</div>
          <QueueAnim type={["left", "right"]} id="feedback">
            <div className="description">
              Please fill out the form to ask questions or discuss a possible
              collaboration. We will reply as soon as possible
            </div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="feedbackEmail">
                Your email:
                <input
                  type="email"
                  name="email"
                  id="feedbackEmail"
                  value={email}
                  onChange={(v) => setEmail(v)}
                />
              </label>
              <label htmlFor="feedbackName">
                Your name:
                <input
                  type="name"
                  name="name"
                  id="feedbackName"
                  value={name}
                  onChange={(v) => setName(v)}
                />
              </label>
              <label htmlFor="feedbackText">
                Your question:
                <textarea
                  type="text"
                  name="text"
                  id="feedbackText"
                  value={text}
                  onChange={(v) => setText(v)}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </QueueAnim>
        </div>
      </Content>
    </Layout>
  );
};

export default HomeFeedback;
