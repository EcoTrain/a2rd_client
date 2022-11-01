import React from "react";
import ClockLoader from "react-spinners/ClockLoader";

const Waiter = () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <ClockLoader
      color={"var(--darkGray)"}
      css={{
        display: "block",
        margin: "0 auto",
        borderColor: "black",
      }}
      size={80}
    />
  </div>
);

export default Waiter;
