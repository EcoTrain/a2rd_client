import React, { useRef, useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "antd/dist/antd.min.css";

import { useScrollPosition } from "./hooks/useScrollPosition";
import Home from "./pages/Home";
import "./App.scss";

const { Header, Footer } = Layout;

const MainHeader = ({items}) => {
  const headerRef = useRef();
  const [hide, setHide] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isHide = currPos.y < prevPos.y;
      if (isHide !== hide) setHide(isHide);
    },
    [hide]
  );

  return (
    <div
      ref={headerRef}
      className="headerWraper"
      style={{
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
      <div className="header">
        <a href="/" className="headerLogo">
          <img src={require("./static/images/logo_max.svg").default} />
        </a>
        <Menu
          className="headerMenu"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          onSelect={(x) => console.log({ x })}
        />
      </div>
    </div>
  );
};

const MainFooter = () => {
  return <Footer className="footer">footer</Footer>;
};

function App() {
  return (
    <Layout className={"mainContainer"}>
      <Home />
      {/* <MainFooter /> */}
    </Layout>
  );
}

export default App;
