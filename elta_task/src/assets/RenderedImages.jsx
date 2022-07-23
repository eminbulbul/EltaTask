import * as React from "react";
import './styles/logoStyles.css'
const RenderedImages = (props) => (
  <div className="appLogo">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={214.141}
        height={149.899}
        {...props}
      >
        <g data-name="Group 196">
          <g data-name="Group 195" fill="#0b2554">
            <path
              data-name="Path 133"
              d="M196.3 0H17.845A17.866 17.866 0 0 0 0 17.845v114.208A17.866 17.866 0 0 0 17.845 149.9H196.3a16.521 16.521 0 0 0 2.987-.261 17.8 17.8 0 0 0 14.858-17.585V17.845A17.866 17.866 0 0 0 196.3 0ZM17.845 142.76A10.707 10.707 0 0 1 7.181 133L78.34 86.47l72.365 56.29ZM207 132.053a10.682 10.682 0 0 1-8.958 10.554 9.7 9.7 0 0 1-1.749.153h-33.964l-47.286-36.8 42.286-33.813L207 101.952Zm0-38.424-48.128-28.877a3.569 3.569 0 0 0-4.069.271l-45.566 36.44-28.531-22.192a3.569 3.569 0 0 0-4.14-.171L7.138 124.494V17.845A10.707 10.707 0 0 1 17.845 7.138H196.3A10.707 10.707 0 0 1 207 17.845Z"
            />
            <path
              data-name="Path 134"
              d="M107.071 19.499a19.5 19.5 0 1 0 19.5 19.5 19.5 19.5 0 0 0-19.5-19.5Zm0 32.5a13 13 0 1 1 13-13 13 13 0 0 1-13 13Z"
            />
          </g>
        </g>
      </svg>
    </div>
    <div style={{margin:"auto",marginTop:"2.5166rem"}}>
        <input style={{transform:"scale(1.83)",marginRight:"1rem"}} type="checkbox" name="RenderedImages" id="RenderedImages" />
        <label htmlFor="RenderedImages">Rendered Images</label>
    </div>
  </div>
);

export default RenderedImages;
