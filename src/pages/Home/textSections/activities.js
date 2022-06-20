import React, { useRef, useState, useEffect } from "react";
import QueueAnim from "rc-queue-anim";
import ScrollAnim from "rc-scroll-anim";
import { useTranslation } from "react-i18next";

import { CheckOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

const { Content } = Layout;
const ScrollOverPack = ScrollAnim.OverPack;

const HomeActivities = () => {
  const { t } = useTranslation("activities");
  const imgMin =
    process.env.PUBLIC_URL +
    "/static/images/index/sections/min/activities.jpg";
  const imgMax =
    process.env.PUBLIC_URL +
    "/static/images/index/sections/max/activities.jpeg";
  const [img, setImg] = useState(window.innerWidth < 960 ? imgMin : imgMax);

  const pageRef = useRef();

  const activitiesList1 = [
    t("activities.list.processing"),
    t("activities.list.modeling"),
    t("activities.list.ML"),
    t("activities.list.analytics"),
    t("activities.list.spatial"),
    t("activities.list.consulting"),
    t("activities.list.development"),
  ];

  const handleResize = () => {
    setImg(window.innerWidth < 960 ? imgMin : imgMax);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return window.addEventListener("resize", null);
  }, []);

  return (
    <Layout
      className="section splitSection section-darkWhite"
      id="homeActivities"
      ref={pageRef}
    >
        <div className="section-content">
          <div className="section-content-block">
            <div className="section-title font-title-h1 text-center">{t("activities.title")}</div>
            <ScrollOverPack replay always={false} playScale={0}>
              <div className="font-text-big description">
                {t("activities.label")}
              </div>
              <ul style={{ marginTop: "1em" }}>
                <QueueAnim type={["right"]}>
                  {activitiesList1.map((text, i) => (
                    <li key={i} style={{ display: "flex" }}>
                      <div className="icon">
                        <CheckOutlined />
                      </div>
                      <div >{text}</div>
                    </li>
                  ))}
                </QueueAnim>
              </ul>
            </ScrollOverPack>
          </div>
        </div>
        <div className="section-img">
          <img src={img} />
        </div>
    </Layout>
  );
};

export default HomeActivities;
