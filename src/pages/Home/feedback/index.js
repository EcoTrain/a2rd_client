import React, { useEffect, useRef } from "react";
import QueueAnim from "rc-queue-anim";
import TextyAnim from "rc-texty";
import { CheckOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import useOnScreen from "../../../hooks/useOnScreen";
import { splitTextByWords } from "../../../fucntions/splitText";

const { Content } = Layout;

const HomeFeedback = () => {
  const pageRef = useRef();
  const onScreen = useOnScreen({ ref: pageRef });

  useEffect(() => {
    if (onScreen) {
      document.title = "A2RD Lab: Feedback";
    }
  }, [onScreen]);

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
          <QueueAnim type={["left", "right"]}>
            <div className="description">
              Please fill out the form to ask questions or discuss a possible
              collaboration. We will reply as soon as possible
            </div>
            <form>
              <label>
                Your email:
                <input type="email" name="email" />
              </label>
              <label>
                Your name:
                <input type="name" name="name" />
              </label>
              <label>
                Your question:
                <textare type="text" name="question" />
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
