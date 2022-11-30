import React from "react";
import {useTranslation} from "react-i18next";

import {ReactComponent as TgIcon} from "./icons/tg.svg";
import {ReactComponent as FbIcon} from "./icons/fb.svg";
import {ReactComponent as TwIcon} from "./icons/twitter.svg";

import Feedback from "../About/feedback";

import '../../components/Section/sections.scss';
import "./contacts.scss";

const ContactsIcons = () => {
  return (
    <div key="ContactsIcons" id="contactsIcons">
      <div className="contactIcon">
        <a
          href="https://www.facebook.com/aleksey.romanov.7"
          target="_blank"
          rel="noreferrer noopener"
          aria-label={"facebook"}
        >
          <FbIcon />
        </a>
      </div>
      <div className="contactIcon">
        <a
          href="https://t.me/a2_development"
          target="_blank"
          rel="noreferrer noopener"
          aria-label={"telegram"}
        >
          <TgIcon />
        </a>
      </div>
      <div className="contactIcon">
        <a
          href="https://twitter.com/A2RD_lab"
          target="_blank"
          rel="noreferrer noopener"
          aria-label={"twitter"}
        >
          <TwIcon />
        </a>
      </div>
    </div>
  );
};

const Contacts = () => {
  const {t} = useTranslation(["home"]);
  return (
    <section
      className="section section-lightGray section-fullscreen"
      id="contacts"
    >
      <div className="section-content">
        <div className="font-size-2">
          <a
            href="https://t.me/a2_development"
            target="_blank"
            rel="noreferrer "
            aria-label={"telegram"}
          >
            {t("contacts.phone")}
          </a>
        </div>
        <div className="font-size-2">
          <a
            href="mailto:info@a2rd.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label={t("email")}
          >
            {t("contacts.email")}
          </a>
        </div>
        <div className="font-size-2">
          <a
            href="https://t.me/a2_development"
            target="_blank"
            rel="noreferrer noopener"
            aria-label={"telegram"}
          >
            {t("contacts.tg")}
          </a>
        </div>

        <Feedback
          className={"font-size-3"}
          style={{
            marginTop: "1rem",
          }}
        />
        {ContactsIcons()}
      </div>
    </section>
  );
};

export default Contacts;
