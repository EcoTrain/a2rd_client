import React, { useEffect, useRef } from "react";
import QueueAnim from "rc-queue-anim";
import { Layout } from "antd";
import "antd/dist/antd.min.css";
import useOnScreen from "../../../hooks/useOnScreen";
import "./contacts.scss";

const ContactsLinks = () => {
  return (
    <div key="ContactsLinks" id="contactsLinks">
      <div className="font-text-big">
        <a href="https://t.me/a2_development" target="_blank" rel="noreferrer">
          +33 6 19 20 31 25
        </a>
      </div>
      <div className="font-text-big">
        <a href="mailto:info@a2rd.com">info@a2rd.com</a>
      </div>
      <div className="font-text-big">
        <a href="https://t.me/a2_development" target="_blank" rel="noreferrer">
          @a2_development
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
        >
          <svg className="contactIcon_svg" viewBox="0 0 48 48">
            <desc>Facebook</desc>
            <path d="M47.761,24c0,13.121-10.638,23.76-23.758,23.76C10.877,47.76,0.239,37.121,0.239,24c0-13.124,10.638-23.76,23.764-23.76C37.123,0.24,47.761,10.876,47.761,24 M20.033,38.85H26.2V24.01h4.163l0.539-5.242H26.2v-3.083c0-1.156,0.769-1.427,1.308-1.427h3.318V9.168L26.258,9.15c-5.072,0-6.225,3.796-6.225,6.224v3.394H17.1v5.242h2.933V38.85z"></path>
          </svg>
        </a>
      </div>
      <div className="contactIcon">
        <a href="https://t.me/a2_development" target="_blank" rel="noreferrer">
          <svg className="contactIcon_svg" viewBox="0 0 60 60">
            <desc>Telegram</desc>
            <path d="M30 0C13.4 0 0 13.4 0 30s13.4 30 30 30 30-13.4 30-30S46.6 0 30 0zm16.9 13.9l-6.7 31.5c-.1.6-.8.9-1.4.6l-10.3-6.9-5.5 5.2c-.5.4-1.2.2-1.4-.4L18 32.7l-9.5-3.9c-.7-.3-.7-1.5 0-1.8l37.1-14.1c.7-.2 1.4.3 1.3 1z"></path>
            <path d="M22.7 40.6l.6-5.8 16.8-16.3-20.2 13.3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

const HomeContacts = () => {
  const pageRef = useRef();
  const onScreen = useOnScreen({ ref: pageRef, rootMargin: "-100px" });

  useEffect(() => {
    if (onScreen) {
      document.title = "A2RD Lab: Contacts";
    }
  }, [onScreen]);

  return (
    <Layout
      className="section section-lightGray"
      id="homeContacts"
      ref={pageRef}
    >
      <QueueAnim type={["left", "right"]} className="section-content">
        <div id="contactsContent" className="section-content-text text-center">
          {ContactsLinks()}
          {ContactsIcons()}
        </div>
      </QueueAnim>
    </Layout>
  );
};

export default HomeContacts;
