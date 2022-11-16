import React, {useContext, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import NavMenuMax from "./Horizontal";
import NavMenuMin from "./Vertical";
import "./navmenu.scss";
import {HeaderContext} from "../../../contexts/HeaderContext";

// https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/
// https://github.com/Ibaslogic/react-multilevel-dropdown-menu

const NavMenu = () => {
  const {t} = useTranslation();
  const [isNarrow, setNarrow] = useState(window.innerWidth < 960);
  const {setHeaderFixed, setHeaderVisible, dropHeaderBackground} =
    useContext(HeaderContext);

  useEffect(() => {
    if (!isNarrow) {
      dropHeaderBackground();
      setHeaderFixed(false);
      setHeaderVisible(false);
      document.documentElement.style.overflow = "unset";
    }
  }, [isNarrow]);

  useEffect(() => {
    const handleResize = () => {
      setNarrow(window.innerWidth < 960);
    };
    window.addEventListener("resize", handleResize);
    return window.addEventListener("resize", null);
  }, []);

  const menuItems = [
    {
      title: t("navHeader.about"),
      submenu: [
        {
          title: t("navHeader.main"),
          url: "/homeAbout",
        },
        {
          title: t("navHeader.projects"),
          url: "/homeProjects",
        },
        {
          title: t("navHeader.startups"),
          url: "/homeStartups",
        },
        {
          title: t("navHeader.stack"),
          url: "/homeStack",
        },
        {
          title: t("navHeader.publications"),
          url: "/homePublications",
        },
        {
          title: t("navHeader.contacts"),
          url: "/homeContacts",
        },
      ],
    },
    {
      title: t("navHeader.projects"),
      url: "/projects/",
    },
    {
      title: t("navHeader.startups"),
      url: "/startups/",
    },
    {
      title: t("navHeader.modeling.main"),
      submenu: [
        {
          title: t("navHeader.modeling.multiagent"),
          url: "/modeling/multiagent/",
        },
        {
          title: t("navHeader.modeling.distribution"),
          url: "/modeling/distribution/",
        },
      ],
    },
  ];

  return (
    <div className="navMenu">
      {isNarrow ? (
        <NavMenuMin menuItems={menuItems} />
      ) : (
        <NavMenuMax menuItems={menuItems} />
      )}
    </div>
  );
};

export default NavMenu;
