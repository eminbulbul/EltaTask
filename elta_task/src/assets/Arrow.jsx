import * as React from "react";

const Arrow = (props) => (
  <div style={{cursor:"pointer"}}>
    <svg
      data-name="Backward arrow"
      xmlns="http://www.w3.org/2000/svg"
      width={23}
      height={23}
      {...props}
    >
      <path
        data-name="Path 10"
        d="m11.5 23 2.091-2.091-7.916-7.916H23v-2.987H5.675l7.916-7.915L11.5 0 0 11.5Z"
        fill="#0b2554"
      />
    </svg>
  </div>
);

export default Arrow;
