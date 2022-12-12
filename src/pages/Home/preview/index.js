import ScrollAnim from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import React, {useEffect, useState} from "react";
import {renderNextPageBtn} from "../../../components/Section/PageScroller";
import "./preview.scss";

const ScrollOverPack = ScrollAnim.OverPack;

const BgVideo = () => {
  const defaultOpacity = 1;
  const [opacity, setOpacity] = useState(defaultOpacity);

  // Opacity observer
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setOpacity(defaultOpacity - position / window.screen.height);
    };
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <video
      loop
      autoPlay
      playsInline
      muted
      poster={process.env.PUBLIC_URL + "/static/images/city_logo.webp"}
      id="previewBg"
      style={{opacity}}
    >
      <source
        src={process.env.PUBLIC_URL + "/static/videos/main_video.webm"}
        type="video/webm"
      />
      <source
        src={process.env.PUBLIC_URL + "/static/videos/main_video.mp4"}
        type="video/mp4"
      />
      <source
        src={process.env.PUBLIC_URL + "/static/videos/main_video.ogv"}
        type="video/ogg"
      />
      {"browser_not_support_video_tag"}
    </video>
  );
};

const HomeIntoNextBtn = () => {
  const defaultOpacity = 1;
  const [opacity, setOpacity] = useState(defaultOpacity);

  // Opacity observer
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setOpacity(defaultOpacity - (position / window.screen.height) * 2);
    };
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{opacity: opacity}}>{renderNextPageBtn({id: "ourAim"})}</div>
  );
};

const HomePreview = () => {
  const video = BgVideo();
  return (
    <section id="homePreview" className="section section-fullscreen">
      {video}
      <div
        className="previewOverlay"
        style={{
          backgroundImage:
            "linear-gradient(45deg, var(--bgPrimaryTransparent), transparent)",
        }}
      />

      <ScrollOverPack
        replay
        always={false}
        playScale={0}
        className="section-content"
        style={{display: "flex", justifyContent: "center"}}
      >
        <TweenOne
          animation={{opacity: 1, duration: 1000}}
          style={{opacity: 0.001, marginBottom: "1rem", fontWeight: 600}}
          className="font-title font-size-1"
        >
          We offer comprehensive solutions for your industry
        </TweenOne>
        <TweenOne
          animation={{opacity: 1, delay: 300, duration: 500}}
          style={{opacity: 0.001, marginBottom: "1rem"}}
          className="font-size-4"
        >
          Complete development cycle: services, mobile applications, design,
          testing, integration, research and development.
        </TweenOne>

        <div className="btnListWrapper">
          <TweenOne
            animation={{opacity: 1, delay: 500, top: "0px"}}
            style={{
              opacity: 0.001,
              marginTop: "1em",
              top: "1rem",
              position: "relative",
              fontWeight: 400,
            }}
            className="btn-outline btn-outline-fill btn-anim font-size-4"
            onClick={() => window.open("/about", "_self")}
          >
            Learn more
          </TweenOne>
          <TweenOne
            animation={{opacity: 1, delay: 700, top: "0px"}}
            style={{
              opacity: 0.001,
              marginTop: "1em",
              top: "1rem",
              position: "relative",
              fontWeight: 400,
            }}
            className="btn-outline btn-anim font-size-4"
            onClick={() => window.open("/contacts", "_self")}
          >
            Contact us
          </TweenOne>
        </div>
        <HomeIntoNextBtn />
      </ScrollOverPack>
    </section>
  );
};

export default HomePreview;
