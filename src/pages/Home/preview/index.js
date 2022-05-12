import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.min.css";
import "./preview.scss";

const { Content } = Layout;

const bgVideo = () => (
  <video
    loop
    autoPlay
    playsInline
    muted
    poster={require("../../../static/images/city_logo.webp")}
    id="bgVideo"
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

const HomePreview = ({ id }) => {
  return (
    <Layout id={id}>
      {bgVideo()}
      <Content className="previewOverlay">
        <div className="previewTitle">A2RD</div>
        <div className="previewText">Test site</div>
      </Content>
    </Layout>
  );
};

export default HomePreview;
