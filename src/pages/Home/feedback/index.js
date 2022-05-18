import React, { useRef, useState } from "react";
import QueueAnim from "rc-queue-anim";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import "./feedback.scss";

const { Content } = Layout;

const HomeFeedback = () => {
  const pageRef = useRef();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    alert("Feedback sent");
    event.preventDefault();
  };

  const getForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="feedbackEmail">
          Your email:
          <input
            type="email"
            name="email"
            id="feedbackEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="feedbackName">
          Your name:
          <input
            type="name"
            name="name"
            id="feedbackName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="feedbackText">
          Your question:
          <textarea
            type="text"
            name="text"
            id="feedbackText"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  };

  return (
    <Layout className="section" id="homeFeedback" ref={pageRef}>
      <Content className="section-content">
        <div className="section-content-text section-darkWhite">
          <div className="font-title-h1 text-center">Feedback</div>
          <QueueAnim type={["left", "right"]} id="feedback">
            <div className="description">
              Please fill out the form to ask questions or discuss a possible
              collaboration. We will reply as soon as possible
            </div>
            {getForm()}
          </QueueAnim>
        </div>
        <div className="section-content-img">
          <img
            src={process.env.PUBLIC_URL + "/static/images/index/feedback5.jpeg"}
          />
        </div>
      </Content>
    </Layout>
  );
};

export default HomeFeedback;
