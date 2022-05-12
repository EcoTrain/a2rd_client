import React, { useRef, useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "antd/dist/antd.min.css";

import { useScrollPosition } from "./hooks/useScrollPosition";
import Home from "./pages/Home";
import "./App.scss";

const { Header, Footer } = Layout;

const MainHeader = () => {
  const headerRef = useRef();
  const [hide, setHide] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isHide = currPos.y < prevPos.y;
      if (isHide !== hide) setHide(isHide);
    },
    [hide]
  );

  const items1 = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  return (
    <div
      ref={headerRef}
      className="headerWraper"
      style={{
        top: 0,
        position: "sticky",
        transform: hide ? "translateY(-95%)" : "translateY(0%)",
        transition: "transform 400ms ease-out",
      }}
      onMouseEnter={() => {
        if (hide) headerRef.current.style.transform = "translateY(0%)";
      }}
      onMouseLeave={() => {
        if (hide) headerRef.current.style.transform = "translateY(-95%)";
      }}
    >
      <Header className="header">
        <div className="logo" />
        <Menu
          className="headerMenu"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        />
      </Header>
    </div>
  );
};
function App() {
  return (
    <Layout>
      <MainHeader />
      <Home />
      <Footer className="footer">footer</Footer>
    </Layout>
  );
}

export default App;
