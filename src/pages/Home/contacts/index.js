import React, {useRef} from "react";
import QueueAnim from "rc-queue-anim";
import {useTranslation} from "react-i18next";
import {Layout} from "antd";
import "antd/dist/antd.min.css";
import "./contacts.scss";

import {ReactComponent as TgIcon} from "./icons/tg.svg";
import {ReactComponent as FbIcon} from "./icons/fb.svg";
import {ReactComponent as TwIcon} from "./icons/twitter.svg";

const ContactsLinks = () => {
  const {t} = useTranslation(["home"]);
  return (
    <div key="ContactsLinks" id="contactsLinks" className="text-center">
      <div className="font-text-large">
        <a
          href="https://t.me/a2_development"
          target="_blank"
          rel="noreferrer "
          aria-label={"telegram"}
        >
          {t("contacts.phone")}
        </a>
      </div>
      <div className="font-text-large">
        <a
          href="mailto:info@a2rd.com"
          target="_blank"
          rel="noreferrer"
          aria-label={t("mail")}
        >
          {t("contacts.email")}
        </a>
      </div>
      <div className="font-text-large">
        <a
          href="https://t.me/a2_development"
          target="_blank"
          rel="noreferrer"
          aria-label={"telegram"}
        >
          {t("contacts.tg")}
        </a>
      </div>
    </div>
  );
};

const ContactsIcons = () => {
  return (
    <div key="ContactsIcons" id="contactsIcons">
      <div className="contactIcon">
        <a
          href="https://www.facebook.com/aleksey.romanov.7"
          target="_blank"
          rel="noreferrer"
          aria-label={"facebook"}
        >
          <FbIcon />
        </a>
      </div>
      <div className="contactIcon">
        <a
          href="https://t.me/a2_development"
          target="_blank"
          rel="noreferrer"
          aria-label={"telegram"}
        >
          <TgIcon />
        </a>
      </div>
      <div className="contactIcon">
        <a
          href="https://twitter.com/A2RD_lab"
          target="_blank"
          rel="noreferrer"
          aria-label={"twitter"}
        >
          <TwIcon />
        </a>
      </div>
    </div>
  );
};

const HomeContacts = () => {
  return (
    <Layout className="section splitSection" id="homeContacts">
      <div className="section-content  section-lightGray">
        <QueueAnim
          type={["left", "right"]}
          id="contacts"
          className="section-content-block"
          style={{display: "contents"}}
        >
          {ContactsLinks()}
          {ContactsIcons()}
        </QueueAnim>
      </div>
    </Layout>
  );
};

export default HomeContacts;
