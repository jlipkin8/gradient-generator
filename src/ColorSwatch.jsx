import React from 'react';

function ColorSwatch({ color, colorId, index, changeColor }) {
  return (
    <div className="color-wrapper">
      <label htmlFor={colorId}>Color {index + 1}:</label>
      <div className="input-wrapper">
        <input
          id={colorId}
          type="color"
          value={color}
          onChange={() => changeColor(event, index)}
        />
      </div>
    </div>
  );
}

export default ColorSwatch;
