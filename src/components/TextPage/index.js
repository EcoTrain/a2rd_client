import React, {useRef, useState, useEffect} from "react";
import PropTypes from "prop-types";
import TextyAnim from "rc-texty";
import ScrollAnim from "rc-scroll-anim";
import QueueAnim from "rc-queue-anim";
import {CheckOutlined} from "@ant-design/icons";
import {Layout} from "antd";
import "antd/dist/antd.min.css";

import {splitTextByWords} from "../../fucntions/splitText";

const ScrollOverPack = ScrollAnim.OverPack;

const TextPage = ({
  id,
  title,
  text,
  note,
  list,
  image,
  sectionTheme,
  direction,
  t,
}) => {
  const _texts = t(text, {returnObjects: true}) || [];
  const textItems = Array.isArray(_texts) ? _texts : [_texts];
  const listItems = t(list, {returnObjects: true});
  const hasImageArea = ["object", "string"].includes(typeof image);

  const getImageSrc = () => {
    return typeof image == "string"
      ? image
      : !image || (hasImageArea && !Object.keys(image).length)
      ? null
      : window.innerWidth < 960
      ? image.min
      : image.max;
  };

  const [img, setImg] = useState(getImageSrc());

  const handleResize = () => {
    setImg(getImageSrc());
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
      {t(text)}
    </TextyAnim>
  );

  const getImage = () =>
    hasImageArea && (
      <div key={`${(title || "").toLowerCase()}_image`} className="section-img">
        {img && <img src={img} />}
      </div>
    );

  const getContent = () => (
    <div
      key={`${(title || "").toLowerCase()}_content`}
      className={`section-content  ${sectionTheme}`}
    >
      <div className="section-content-block">
        <div className="section-title font-title-h1 text-center">
          {t(title)}
        </div>
        <ScrollOverPack replay always={false} playScale={0}>
          {textItems.map((x, i) => (
            <div key={i}>{getTextAnim(x, i)}</div>
          ))}
          <div className="font-text-small">{getTextAnim(t(note))}</div>
          {listItems && (
            <ul style={{marginTop: "1em"}}>
              <QueueAnim type={["right"]}>
                {listItems.map((text, i) => (
                  <li key={i} style={{display: "flex"}}>
                    <div className="icon">
                      <CheckOutlined />
                    </div>
                    <div>{text}</div>
                  </li>
                ))}
              </QueueAnim>
            </ul>
          )}
        </ScrollOverPack>
      </div>
    </div>
  );

  const sectionChilds = [getContent(), getImage()];

  return (
    <Layout
      className={["section", hasImageArea && "splitSection"].join(" ")}
      id={id}
    >
      {direction == "left" ? sectionChilds : sectionChilds.reverse()}
    </Layout>
  );
};

TextPage.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.array,
  note: PropTypes.string,
  imgMax: PropTypes.string,
  sectionTheme: PropTypes.string,
  direction: PropTypes.string,
};

TextPage.defaultProps = {
  id: 0,
  title: "",
  text: [],
  note: "",
  sectionTheme: "section-white",
  direction: "left",
};

export default TextPage;
