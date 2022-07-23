import React from "react";
import './styles/CheckButton.css'
const CheckButton = () => {
  return (
    <div className="check-Button">
      <input
        style={{ transform: "scale(1.83)", marginRight: "1rem" }}
        type="checkbox"
        name="RenderedImages"
        id="RenderedImages"
      />
      <label htmlFor="RenderedImages">Rendered Images</label>
    </div>
  );
};

export default CheckButton;
