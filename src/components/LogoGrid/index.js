import React from "react";
import "./index.scss";

const LogoGrid = ({imageSourceList}) => {
  return (
    <div className="logoGrid">
      {imageSourceList.map((img, i) => renderGridItem(img, i))}
    </div>
  );
};

const renderGridItem = (img, i) => {
  const Img = img;
  return (
    <div key={i} className="logoGridItem">
      <Img />
    </div>
  );
};
export default LogoGrid;
