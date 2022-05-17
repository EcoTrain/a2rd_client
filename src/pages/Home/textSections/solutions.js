import React, { useRef } from "react";
import TextyAnim from "rc-texty";
import ScrollAnim from "rc-scroll-anim";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import { splitTextByWords } from "../../../fucntions/splitText";

const { Content } = Layout;
const ScrollOverPack = ScrollAnim.OverPack;

const HomeSolutions = () => {
  const pageRef = useRef();
  return (
    <Layout className="section section-lightGray" id="homeSolutions" ref={pageRef}>
      <Content className="section-content">
        <div className="section-content-img">
          <img src={process.env.PUBLIC_URL + "/static/images/city_logo.webp"} />
        </div>
        <div className="section-content-text">
          <div className="font-title-h1 text-center">Our solutions</div>
          <ScrollOverPack replay always={false} playScale={0}>
            <TextyAnim
              className="description"
              type="bottom"
              split={splitTextByWords}
              delay={0}
              interval={10}
            >
              Our solutions facilitate routine procedures and enhance security
              through user-friendly software assistants and a wide network of
              partners from various sectors.
            </TextyAnim>
            <TextyAnim
              className="description"
              type="bottom"
              split={splitTextByWords}
              delay={0}
              interval={10}
            >
              We also offer user-friendly interfaces of personal medical
              assistants for those who live without the need for therapeutic
              support but want to increase the level of protection for
              themselves and their loved ones through a personalized profile.
            </TextyAnim>
          </ScrollOverPack>
        </div>
      </Content>
    </Layout>
  );
};

export default HomeSolutions;
