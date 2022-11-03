import React from "react";
import PropTypes from "prop-types";

const HamburgerMenu = ({
  width = 36,
  height = 36,
  isOpen = false,
  strokeWidth = 2,
  animationDuration = 0.4,
  rotate = 0,
  borderRadius = 0,
  color = "#000",
  onClick = () => {},
}) => {
  const halfHeight = `${parseInt(height) / 2}px`;

  const getTransformValue = (isOpen, defaultPos, rotateVal) =>
    `translate3d(0,${isOpen ? halfHeight : defaultPos},0) rotate(${
      isOpen ? `${rotateVal}deg` : "0"
    })`;

  const styles = {
    container: {
      width,
      height,
      position: "relative",
      transform: `rotate(${rotate}deg)`,
    },
    lineBase: {
      display: "block",
      height: `${strokeWidth}px`,
      width: "100%",
      background: color,
      transitionTimingFunction: "ease",
      transitionDuration: `${animationDuration}s`,
      borderRadius: `${borderRadius}px`,
      transformOrigin: "center",
      position: "absolute",
    },
    firstLine: {
      transform: getTransformValue(isOpen, 0, 45),
    },
    secondLine: {
      transitionTimingFunction: "ease-out",
      transitionDuration: `${animationDuration / 4}s`,
      opacity: isOpen ? 0 : 1,
      top: halfHeight,
    },
    thirdLine: {
      transform: getTransformValue(isOpen, `${height}px`, -45),
    },
  };

  return (
    <div style={styles.container} onClick={onClick}>
      <span style={Object.assign({}, styles.lineBase, styles.firstLine)}></span>
      <span
        style={Object.assign({}, styles.lineBase, styles.secondLine)}
      ></span>
      <span style={Object.assign({}, styles.lineBase, styles.thirdLine)}></span>
    </div>
  );
};

HamburgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  strokeWidth: PropTypes.number,
  rotate: PropTypes.number,
  color: PropTypes.string,
  borderRadius: PropTypes.number,
  animationDuration: PropTypes.number,
  className: PropTypes.string,
};

export default HamburgerMenu;
