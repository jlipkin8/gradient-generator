import React from 'react';

function Gradient() {
  const [colors, setColors] = React.useState(['#FFD500', '#FF0040']);
  const [disableAdd, setDisableAdd] = React.useState(false);
  const [disableRemove, setDisableRemove] = React.useState(false);

  const colorStops = colors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;

  function addColor() {
    setDisableRemove(false);
    if (colors.length + 1 > 5) {
      setDisableAdd(true);
      window.alert('There should not be more than 5 colors.');
      return;
    }
    const newColors = [...colors, '#FF0000'];
    setColors(newColors);
  }

  function removeColor() {
    setDisableAdd(false);
    if (colors.length - 1 < 2) {
      setDisableRemove(true);
      window.alert('There should be no less than 2 colors.');
      return;
    }
    const newColors = [...colors];
    newColors.pop();
    setColors(newColors);
  }

  function changeColor(event, index) {
    const newColors = [...colors];
    newColors[index] = event.target.value;
    setColors(newColors);
  }

  return (
    <div className="wrapper">
      <div className="actions">
        <button onClick={removeColor} disabled={disableRemove}>
          Remove color
        </button>
        <button onClick={addColor} disabled={disableAdd}>
          Add color
        </button>
      </div>

      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />

      <div className="colors">
        {colors.map((color, index) => {
          const colorId = `color-${index}`;
          return (
            <div key={colorId} className="color-wrapper">
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
        })}
      </div>
    </div>
  );
}

export default Gradient;
