import React, { useRef, useState, useEffect } from "react";
import QueueAnim from "rc-queue-anim";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import "./feedback.scss";

const { Content } = Layout;

const HomeFeedback = () => {
  const imgMin =
    process.env.PUBLIC_URL +
    "/static/images/index/sections/min/feedbackMin.jpeg";
  const imgMax =
    process.env.PUBLIC_URL +
    "/static/images/index/sections/max/feedbackMax.jpeg";
  const pageRef = useRef();

  const [img, setImg] = useState(window.innerWidth < 960 ? imgMin : imgMax);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleResize = () => {
    setImg(window.innerWidth < 960 ? imgMin : imgMax);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return window.addEventListener("resize", null);
  }, []);

  const onSuccess = (res) => {
    console.log("Feedback result", res)
    setEmail("");
    setName("");
    setText("");
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    const url = process.env.REACT_APP_SERVER_URL + "/api/send_email";
    const body = {
      email,
      name,
      text,
    };

    let response = fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(body),
    })
      .then(onSuccess)
      .catch((err) => console.log("Feedback error", err));
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
          <div className="section-text-block">
            <div className="font-title-h1 text-center">Feedback</div>
            <QueueAnim type={["left", "right"]} id="feedback">
              <div className="description">
                Please fill out the form to ask questions or discuss a possible
                collaboration. We will reply as soon as possible
              </div>
              {getForm()}
            </QueueAnim>
          </div>
        </div>
        <div className="section-content-img">
          <img src={img} />
        </div>
      </Content>
    </Layout>
  );
};

export default HomeFeedback;
