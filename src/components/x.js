import React from "react";
import "./style.css";
function x(props) {
  return (
    <div>
      <svg
        width="68"
        height="68"
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
      >
        <g filter="url(#filter0_d)">
          <line
            x1="7.53553"
            y1="4.46447"
            x2="59.5355"
            y2="56.4645"
            className="x_line"
            stroke="black"
            stroke-width="10"
            id={props.x}
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0.928932"
            width="67.0711"
            height="67.0711"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
        <g filter="url(#filter0_d)">
          <line
            x1="8.46447"
            y1="56.4645"
            x2="60.4645"
            y2="4.46446"
            stroke="black"
            className="x_line"
            stroke-width="10"
            id={props.x}
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0.928955"
            y="0.928932"
            width="67.0711"
            height="67.0711"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
export default x;
