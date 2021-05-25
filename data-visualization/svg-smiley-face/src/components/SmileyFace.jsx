import React from "react";
import BackgroundCircle from "./BackgroundCircle";
import Eyes from "./Eyes";
import Mouth from "./Mouth";

const width = 960;
const height = 500;
const strokeWidth = 10;
const centerX = width / 2;
const centerY = height / 2;
const eyeRadius = 50;

const mouthWidth = 20;
const mouthRadius = 140;

const SmileyFace = () => {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <BackgroundCircle centerY={centerY} strokeWidth={strokeWidth} />
        <Eyes eyeRadius={eyeRadius} />
        <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
      </g>
    </svg>
  );
};

export default SmileyFace;
