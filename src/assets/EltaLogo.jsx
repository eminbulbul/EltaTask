import * as React from "react";

const EltaLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={417}
    height={44}
    {...props}
  >
    <defs>
      <pattern
        id="a"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        viewBox="0 0 923 210"
      >
        <image
          width={923}
          height={210}
          xlinkHref="data:image/png;base64,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"
        />
      </pattern>
    </defs>
    <g data-name="Group 131">
      <path transform="translate(0 1)" fill="url(#a)" d="M0 0h182v41H0z" />
      <text
        data-name="CGI STUDIOS"
        transform="translate(225 36)"
        fill="#0b2554"
        fontSize={33}
        fontFamily="SegoeUI, Segoe UI"
      >
        <tspan x={0} y={0}>
          {"CGI STUDIOS"}
        </tspan>
      </text>
    </g>
  </svg>
);

export default EltaLogo;