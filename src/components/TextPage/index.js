import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import TextyAnim from "rc-texty";
import ScrollAnim from "rc-scroll-anim";
import {CheckOutlined} from "@ant-design/icons";



import {splitTextByWords} from "../../fucntions/splitText";
import TweenOne from "rc-tween-one";

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
  // TODO: Избавиться от массива. Добавить в css перенос абзацев по \n
  const _texts = t(text, {returnObjects: true}) || [];
  const textItems = Array.isArray(_texts) ? _texts : [_texts];
  const listItems = t(list, {returnObjects: true});
  const hasImageArea = ["object", "string"].includes(typeof image);
  const [img, setImg] = useState(getImageSrc());

  function getImageSrc() {
    const hasNotImage = !image || (hasImageArea && !Object.keys(image).length);
    let _img = {
      src: null,
      alt: "",
      title: "",
    };
    if (!hasNotImage) {
      const isMobile = window.innerWidth < 960;
      _img.src = isMobile && image.min ? image.min : image.src;
      _img.alt = t(image.alt) || "";
      _img.title = t(image.title) || "";
    }
    return _img;
  }

  useEffect(() => {
    const handleResize = () => {
      setImg(getImageSrc());
    };
    window.addEventListener("resize", handleResize);
    return window.addEventListener("resize", null);
  }, []);

  const getTextAnim = (text, i) => (
    <TextyAnim
      className="description"
      type="bottom"
      split={splitTextByWords}
      delay={i * 200}
      interval={2}
    >
      {t(text)}
    </TextyAnim>
  );

  const getImage = () =>
    hasImageArea && (
      <div key={`${(title || "").toLowerCase()}_image`} className="section-img">
        {img.src && <img src={img.src} alt={img.alt} title={img.title} />}
      </div>
    );

  const getContent = () => (
    <div
      key={`${(title || "").toLowerCase()}_content`}
      className={`section-content  ${sectionTheme}`}
    >
      <div className="section-content-block">
        <ScrollOverPack replay always={false} playScale={0}>
          <TweenOne
            className="section-title font-title-h1 text-center"
            animation={{opacity: 1}}
            style={{opacity: 0.001}}
          >
            {t(title)}
          </TweenOne>
        </ScrollOverPack>
        {textItems.map((x, i) => (
          <ScrollOverPack key={i} replay always={false} playScale={0}>
            <TweenOne
              className="font-text-big"
              animation={{opacity: 1}}
              style={{opacity: 0.001}}
            >
              {getTextAnim(x, i)}
            </TweenOne>
          </ScrollOverPack>
        ))}

        <ScrollOverPack replay always={false} playScale={0}>
          <TweenOne
            className="font-text-small"
            animation={{opacity: 1}}
            style={{opacity: 0.001}}
          >
            {getTextAnim(t(note))}
          </TweenOne>
        </ScrollOverPack>

        {listItems && (
          <ul style={{marginTop: "1em"}}>
            {listItems.map((text, i) => (
              <ScrollOverPack key={i} replay always={false} playScale={0}>
                <TweenOne
                  className="font-text-big"
                  animation={{opacity: 1}}
                  style={{opacity: 0.001}}
                >
                  <li key={i} style={{display: "flex"}}>
                    <div className="icon">
                      <CheckOutlined />
                    </div>
                    <div>{text}</div>
                  </li>
                </TweenOne>
              </ScrollOverPack>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  const sectionChilds = [getContent(), getImage()];

  return (
    <section
      className={["section", hasImageArea && "splitSection"].join(" ")}
      id={id}
    >
      {direction == "left" ? sectionChilds : sectionChilds.reverse()}
    </section>
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
