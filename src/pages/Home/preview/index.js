import React, {useEffect, useState} from "react";
import {renderNextPageBtn} from "../../../components/Section/PageScroller";
import "./preview.scss";

const BgVideo = () => {
  const defaultOpacity = 0.6;
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
      style={{opacity: opacity}}
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
      setOpacity(defaultOpacity - position / window.screen.height * 2);
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
      <div className="previewOverlay" />
      <div className="section-content">
        <div className="font-title font-size-1" style={{marginBottom: "1rem"}}>
          We offer comprehensive solutions for your industries
        </div>
        <div className="font-size-4">
          Complete development cycle: services, mobile applications, design,
          testing, integration, research and development.
        </div>

        <div className="btnListWrapper">
          <div
            className="btn-outline btn-outline-fill btn-anim font-size-4"
            onClick={() => window.open("/about", "_self")}
            style={{marginTop: "1em"}}
          >
            Learn more
          </div>
          <div
            className="btn-outline btn-anim font-size-4"
            onClick={() => window.open("/contacts", "_self")}
            style={{marginTop: "1em"}}
          >
            Contact us
          </div>
        </div>
        <HomeIntoNextBtn />
      </div>
    </section>
  );
};

export default HomePreview;
