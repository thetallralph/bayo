// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 361 328"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".1"}
        d={
          "M94.93 361.223H68.758a68.482 68.482 0 01-50.05-115.251l20.47-21.95a55.173 55.173 0 00-1.316-76.618l-20.092-20.11a13.526 13.526 0 0119.118-19.118l20.092 20.092a82.21 82.21 0 011.984 114.205l-20.489 21.95a41.481 41.481 0 007.589 62.933 41.481 41.481 0 0022.712 6.813h12.21a434.28 434.28 0 01.217-18.632c.65-19.533 2.832-45.847 9.018-72.361 6.132-26.368 16.503-54.036 34.251-75.337 15.727-18.883 37.064-32.483 65.11-35.801V57.314A56.814 56.814 0 01246.325.5c13.455 0 24.349 10.894 24.349 24.349v11.723h29.507a49.578 49.578 0 0142.114 23.447l11.183 18.036c19.695 31.798-1.515 72.506-37.75 75.572v167.015a40.581 40.581 0 01-40.527 40.581h-13.527v-40.581a67.626 67.626 0 00-41.725-62.482 67.635 67.635 0 00-25.875-5.154h-22.545a13.526 13.526 0 00-9.565 23.092 13.526 13.526 0 009.565 3.962h22.545a40.584 40.584 0 0140.563 40.582v40.581H94.929z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
