import React, { useEffect, useState, useRef } from "react";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import TextyAnim from "rc-texty";

import { Layout } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.min.css";

import useOnScreen from "../../../hooks/useOnScreen";
import "./preview.scss";

const { Content } = Layout;

const BgVideo = () => {
  const [opacity, setOpacity] = useState(1);

  // Opacity observer
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setOpacity(1 - position / window.screen.height);
    };
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

class Demo extends React.Component {
  geInterval = (e) => {
    switch (e.index) {
      case 0:
        return 0;
      case 1:
        return 150;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return 150 + 450 + (e.index - 2) * 10;
      default:
        return 150 + 450 + (e.index - 6) * 150;
    }
  };
  getEnter = (e) => {
    const t = {
      opacity: 0,
      scale: 0.8,
      y: "-100%",
    };
    if (e.index >= 2 && e.index <= 6) {
      return { ...t, y: "-30%", duration: 150 };
    }
    return t;
  };

  getSplit = (e) => {
    const t = e.split(" ");
    const c = [];
    t.forEach((str, i) => {
      c.push(<span key={`${str}-${i}`}>{str}</span>);
      if (i < t.length - 1) {
        c.push(<span key={` -${i}`}> </span>);
      }
    });
    return c;
  };
  render() {
    const text = "A2RD";
    return (
      <div className="bannerText">
        <div className="bannerText-shape">
          <div className="shape-left">
            <TweenOne
              className="shape-plug"
              animation={[
                {
                  x: "100%",
                  type: "from",
                  ease: "easeInOutQuint",
                  duration: 600,
                },
                {
                  x: "-100%",
                  ease: "easeInOutQuart",
                  duration: 450,
                  delay: -150,
                },
              ]}
            />
          </div>
          <div className="shape-right">
            <TweenOne
              className="shape-plug"
              animation={[
                {
                  x: -158,
                  type: "from",
                  ease: "easeInOutQuint",
                  duration: 600,
                },
                { x: 158, ease: "easeInOutQuart", duration: 450, delay: -150 },
              ]}
            />
          </div>
        </div>
        <TextyAnim
          className="title"
          type="mask-top"
          delay={400}
          enter={this.getEnter}
          interval={this.geInterval}
          component={TweenOne}
          componentProps={{
            animation: [
              { x: 130, type: "set" },
              { x: 100, delay: 500, duration: 450 },
              {
                ease: "easeOutQuart",
                duration: 300,
                x: 0,
              },
              {
                letterSpacing: 0,
                delay: -300,
                scale: 0.9,
                ease: "easeInOutQuint",
                duration: 1000,
              },
              {
                scale: 1,
                width: "100%",
                delay: -300,
                duration: 1000,
                ease: "easeInOutQuint",
              },
            ],
          }}
        >
          {text}
        </TextyAnim>
        <TweenOne
          className="bar"
          animation={{
            delay: 2000,
            width: 0,
            x: 158,
            type: "from",
            ease: "easeInOutExpo",
          }}
        />
        <TextyAnim
          className="content"
          type="bottom"
          split={this.getSplit}
          delay={2200}
          interval={30}
        >
          Animation specification and components of Ant Design.
        </TextyAnim>
      </div>
    );
  }
}

const HomePreview = () => {
  const elemRef = useRef();
  const onScreen = useOnScreen({ ref: elemRef, rootMargin: "-100px" });
  const video = BgVideo();

  const [isFirstInit, setIsFirstInit] = useState(true);

  useEffect(() => {
    if (onScreen) {
      console.log("Preview onScreen");
      if (isFirstInit) {
        console.log("FIRST INIT");
        setIsFirstInit(false);
      }
    }
  }, [onScreen]);

  const renderBanner = () => {
    return (
      <>
        <div className="banner">
          <Demo />
        </div>

        <TweenOne
          className="bottomScrollBtn"
          animation={{
            y: "-=20",
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          key="icon"
        >
          <DownOutlined />
        </TweenOne>
      </>
    );
  };

  return (
    <Layout ref={elemRef}>
      {video}
      <Content className="previewOverlay">{renderBanner()}</Content>
    </Layout>
  );
};

export default HomePreview;
