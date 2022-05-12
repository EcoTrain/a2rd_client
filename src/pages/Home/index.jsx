import React, { useEffect, useState } from "react";
import "antd/dist/antd.min.css";
import HomePreview from "./preview";
import HomeAbout from "./about";
import Header from "../../components/Header";

import "./home.scss";

const Home = () => {
  const items = [
    { id: "homeSection", label: "Home" },
    { id: "homeAboutSection", label: "About" },
  ].map((item) => ({
    key: `${item.id}`,
    label: `${item.label}`,
  }));
  return (
    <div className="sectionListOverlay" id={"homeSection"}>
      <Header items={items} />
      <HomePreview />
      <HomeAbout />
      <HomeAbout />
      <HomeAbout />
    </div>
  );
};

// const Home = () => {
//   return (
//     <PageScroller style={{ display: "flex", flexDirection: "column" }}>
//       <HomePreview />
//       <HomeAbout />
//       <HomeAbout />
//       <HomeAbout />
//     </PageScroller>
//   );
// };

// const PageScroller = ({ children }) => {
//   const [scrollPos, setScrollPos] = useState(0);
//   const [pageIndex, setPageIndex] = useState(0);
//   const [scrollEnabled, setScrollEnabled] = useState(true);
//   const pages = children.length;

//   console.log({ children });

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     // return window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleScroll = () => {
//     const winHeight = window.innerHeight;

//     console.log({ pageIndex });
//     console.log({ winHeight });
//     console.log({ scrollPos });

//     if (scrollEnabled) {
//       if (document.body.getBoundingClientRect().top > scrollPos) {
//         // handle scroll up
//         if (pageIndex - 1 >= 0) {
//           scroll(winHeight, pageIndex - 1);
//         }
//       } else {
//         // handle scroll down
//         if (pageIndex + 1 <= pages - 1) {
//           console.log("scroll down");
//           scroll(winHeight, pageIndex + 1);
//         }
//       }
//     }
//   };

//   const scroll = (winHeight, pageIndex) => {
//     window.scrollTo(0, winHeight * pageIndex);

//     console.log("scroll winHeight", winHeight);
//     console.log("scroll pageIndex", pageIndex);
//     console.log("scroll", 0 - document.body.getBoundingClientRect().top);

//     const scrollLocker = setTimeout(() => {
//       setScrollEnabled(false);
//     }, 1000);

//     setScrollPos(0 - document.body.getBoundingClientRect().top);
//     setPageIndex(pageIndex);
//     setScrollEnabled(true);
//   };

//   return children;
// };

export default Home;
