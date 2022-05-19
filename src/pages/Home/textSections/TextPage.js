import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextyAnim from "rc-texty";
import ScrollAnim from "rc-scroll-anim";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import { splitTextByWords } from "../../../fucntions/splitText";

const { Content } = Layout;
const ScrollOverPack = ScrollAnim.OverPack;

const HomeTextPage = ({
  title,
  texts,
  imgMin,
  imgMax,
  sectionTheme,
  direction,
}) => {
  const [img, setImg] = useState(window.innerWidth < 960 ? imgMin : imgMax);
  const pageRef = useRef();

  // console.log({ title, texts, img, sectionTheme, direction });

  const handleResize = () => {
    setImg(window.innerWidth < 960 ? imgMin : imgMax);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return window.addEventListener("resize", null);
  }, []);

  const getTextAnim = (text, i) => (
    <TextyAnim
      className="font-text-big description"
      type="bottom"
      split={splitTextByWords}
      delay={i * 300}
      interval={5}
    >
      {text}
    </TextyAnim>
  );

  const getImage = () => (
    <div
      key={`${(title || "").toLowerCase()}_image`}
      className="section-content-img"
    >
      {img && <img src={img} />}
    </div>
  );

  const getContent = () => (
    <div
      key={`${(title || "").toLowerCase()}_content`}
      className={`section-content-text  ${sectionTheme}`}
    >
      <div className="section-text-block">
        <div className="font-title-h1 text-center">{title}</div>
        <ScrollOverPack replay always={false} playScale={0}>
          {texts.map((x, i) => (
            <div key={i}>{getTextAnim(x, i)}</div>
          ))}
        </ScrollOverPack>
      </div>
    </div>
  );

  const sectionChilds = [getContent(), getImage()];

  return (
    <Layout className="section" ref={pageRef}>
      <Content className={`section-content`}>
        {direction == "left" ? sectionChilds : sectionChilds.reverse()}
      </Content>
    </Layout>
  );
};

HomeTextPage.propTypes = {
  title: PropTypes.string,
  texts: PropTypes.array,
  imgMin: PropTypes.string,
  imgMax: PropTypes.string,
  sectionTheme: PropTypes.string,
  direction: PropTypes.string,
};

HomeTextPage.defaultProps = {
  title: "",
  texts: [],
  imgMin: "",
  imgMax: "",
  sectionTheme: "section-white",
  direction: "left",
};

export default HomeTextPage;