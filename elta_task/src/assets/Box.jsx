import * as React from "react"

const Box = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={33} height={33} {...props}>
    <g data-name="Group 224">
      <g data-name="Rectangle 576" fill="none" stroke="#0b2554" strokeWidth={2}>
        <rect width={33} height={33} rx={3} stroke="none" />
        <rect x={1} y={1} width={31} height={31} rx={2} />
      </g>
      <g data-name="Group 77">
        <path data-name="Rectangle 460" fill="none" d="M6.999 7h19v19h-19z" />
        <path
          d="m14.184 22.139-7.033-7.031 1.427-1.429 5.606 5.5 9.275-9.271 1.427 1.427Z"
          fill="#0b2554"
        />
      </g>
    </g>
  </svg>
)

export default Box
