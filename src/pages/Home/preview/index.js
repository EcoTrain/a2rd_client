import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll/modules";
import TweenOne from "rc-tween-one";
import TextyAnim from "rc-texty";

import { Layout } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.min.css";

import useOnScreen from "../../../hooks/useOnScreen";
import "./preview.scss";
import { splitTextByWords } from "../../../fucntions/splitText";

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
      poster={process.env.PUBLIC_URL + "/static/images/city_logo.webp"}
      id="bgVideo"
      style={{ opacity: opacity }}
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
        src="../../../static/videos/main_video.ogv"
        type="video/ogg"
        codecs="theora, vorbis"
      />
      {"browser_not_support_video_tag"}
    </video>
  );
};

const Banner = () => {
  const text = "A2RD";

  const getInterval = (e) => {
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
  const getEnter = (e) => {
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

  return (
    <div className="bannerContent">
      <div className="bannerContent-shape">
        <div className="shape-left">
          <TweenOne
            className="shape-plug"
            animation={[
              {
                x: "101%",
                type: "from",
                ease: "easeInOutQuint",
                duration: 600,
                delay: -150,
              },
              {
                x: "-101%",
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
        className="font-title-large"
        type="mask-top"
        delay={400}
        enter={getEnter}
        interval={getInterval}
        component={TweenOne}
        componentProps={{
          animation: [
            { x: 130, type: "set" },
            { x: 100, delay: 500, duration: 450 },
            {
              x: 0,
              duration: 300,
              ease: "easeOutQuart",
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
          width: "100%",
          type: "to",
          ease: "easeInOutExpo",
        }}
      />
      <TextyAnim
        type="bottom"
        split={splitTextByWords}
        delay={2200}
        interval={30}
      >
        Research and Develpoment Lab
      </TextyAnim>
    </div>
  );
};

const HomePreview = () => {
  const video = BgVideo();
  const pageRef = useRef();
  const onScreen = useOnScreen({ ref: pageRef });

  useEffect(() => {
    if (onScreen) {
      document.title = "A2RD Lab";
    }
  }, [onScreen]);

  const renderNextPageBtn = () => (
    <Link className="nextPageBtn" to="homeAbout" smooth={true} duration={500}>
      <TweenOne
        className="nextPageBtnContent"
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
    </Link>
  );

  const renderBannerBg = () => {
    return (
      <TweenOne
        className="bannerBg"
        style={{ opacity: 0 }}
        animation={{
          type: "from",
          opacity: 0,
          duration: 1000,
          delay: 1000,
        }}
        key="icon"
      >
        <div className="triangle-container">
          <svg className="triangle" viewBox="0 0 100 70">
            <polygon points="50,0 0,70 100,70" />
          </svg>
        </div>
      </TweenOne>
    );
  };

  const renderBanner = () => {
    return (
      <div className="banner">
        {renderBannerBg()}
        <Banner />
      </div>
    );
  };

  return (
    <Layout ref={pageRef} id={"homePreview"}>
      {video}
      <Content className="previewOverlay">
        {renderBanner()}
        {renderNextPageBtn()}
      </Content>
    </Layout>
  );
};

export default HomePreview;
