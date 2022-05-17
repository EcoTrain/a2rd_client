import React, { useRef } from "react";
import QueueAnim from "rc-queue-anim";
import ScrollAnim from "rc-scroll-anim";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

const ScrollOverPack = ScrollAnim.OverPack;

const AboutDescription = () => {
  return (
    <div key="aboutDescription" className="section-content-text">
      <div className="font-title-h1 text-center">About Us</div>
      <div className="font-text-big description">
        We are motivated by more than the simple pursuit of business success. We
        aim to make the world sustainable and better than it was before. We aim
        to improve the lives of millions of people worldwide and make the
        process of following/conducting therapy more comfortable for both
        patients and doctors.
      </div>
    </div>
  );
};

const AboutFounder = () => {
  const imgAlexey = process.env.PUBLIC_URL + "/static/images/index/alexey.webp";
  return (
    <div
      key="aboutFounder"
      id="aboutFounder"
      className="section-content-text text-center"
    >
      <img
        className="avatar"
        src={imgAlexey}
        style={{ height: 100, width: 100, marginBottom: "1em" }}
      />
      <div className="founder-text">
        <div>
          With the highest consideration from the A2 Research and Development
          lab
        </div>
        <div>Aleksey A. ROMANOV</div>
        <div>CEO, founder</div>
      </div>
    </div>
  );
};

const HomeAbout = () => {
  const pageRef = useRef();
  return (
    <Layout className="section section-white" id="homeAbout" ref={pageRef}>
      <ScrollOverPack replay always={false} playScale={0}>
        <QueueAnim
          type={["bottom", "top"]}
          className="section-content"
          delay={200}
        >
          {AboutDescription()}
          {AboutFounder()}
        </QueueAnim>
      </ScrollOverPack>
    </Layout>
  );
};

export default HomeAbout;
