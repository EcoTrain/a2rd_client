import React, { useRef } from "react";
import QueueAnim from "rc-queue-anim";
import ScrollAnim from "rc-scroll-anim";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

const ScrollOverPack = ScrollAnim.OverPack;

const AboutDescription = () => {
  return (
    <div key="AboutDescription" className="section-content-text">
      <div className="font-title-h1 text-center">About Us</div>
      <div className="font-text-big description">
        We are motivated by more than the simple pursuit of business success. We
        aim to make the world sustainable and better than it was before. At the
        A2 Research and Development lab, we are open to collaborating with
        investment companies and the research community, so some of our study
        results have already been published in scientific journals. Others are
        submitted for peer review.
      </div>
    </div>
  );
};

const AboutFounder = () => {
  const imgAlexey = process.env.PUBLIC_URL + "/static/images/index/alexey.webp";
  return (
    <div
      key="AboutFounder"
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
        <QueueAnim type={["left", "right"]} className="section-content">
          {AboutDescription()}
          {AboutFounder()}
        </QueueAnim>
      </ScrollOverPack>
    </Layout>
  );
};

export default HomeAbout;