import React from "react";

export const splitTextByWords = (str) => {
  const text = str.split(" ");
  const char = [];
  text.forEach((str, i) => {
    char.push(<span key={`${str}-${i}`}>{str}</span>);
    if (i < text.length - 1) {
      char.push(<span key={` -${i}`}> </span>);
    }
  });
  return char;
};
