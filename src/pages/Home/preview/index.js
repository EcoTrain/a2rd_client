import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import "antd/dist/antd.min.css";
import "./preview.scss";

const { Content } = Layout;

const BgVideo = () => {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setOpacity(1 - position / window.screen.height);
    console.log({ opacity });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
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
      poster={require("../../../static/images/city_logo.webp")}
      id="bgVideo"
      style={{ opacity: opacity }}
    >
      <source
        src={require("../../../static/videos/main_video.webm")}
        type="video/webm"
      />
      <source
        src={require("../../../static/videos/main_video.mp4")}
        type="video/mp4"
      />
      <source
        src="../../../static/videos/main_video.ogv"
        type="video/ogg"
        codecs="theora, vorbis"
      />
      {"browser_not_support_video_tag"}
    </video>
  );
};

const HomePreview = () => {
  const video = BgVideo();
  return (
    <Layout>
      {video}
      <Content className="previewOverlay">
        <div className="previewTitle">A2RD</div>
        <div className="previewText">Test site</div>
      </Content>
    </Layout>
  );
};

export default HomePreview;
