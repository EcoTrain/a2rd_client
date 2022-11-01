import React from "react";
import {useTranslation} from "react-i18next";
import MenuItems from "./MenuItems";
import "./navmenu.scss";

// https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/
// https://github.com/Ibaslogic/react-multilevel-dropdown-menu

const Navbar = () => {
  const {t} = useTranslation();

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
    <div className="headerMenu">
       <ul className={window.innerWidth > 960 ? "menu" : "menu-min"}>
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul> 
    </div>
  );
};

export default Navbar;
