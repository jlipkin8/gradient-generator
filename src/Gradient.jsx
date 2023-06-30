import React from 'react';
import ColorSwatch from './ColorSwatch';
import DegreeTiltRange from './DegreeTiltRange';

function Gradient() {
  const [colors, setColors] = React.useState(['#FFD500', '#FF0040']);
  const [degrees, setDegrees] = React.useState(0);
  const [disableAdd, setDisableAdd] = React.useState(false);
  const [disableRemove, setDisableRemove] = React.useState(false);
  const [displayCount, setDisplayCount] = React.useState(2);

  const colorStops = colors.join(', ');
  const degreesTilt = `${degrees}deg`;
  const backgroundImage = `linear-gradient(${degreesTilt}, ${colorStops})`;

  function addColor() {
    let newColors = [];
    setDisableRemove(false);
    if (displayCount + 1 > 5) {
      setDisableAdd(true);
      window.alert('There should not be more than 5 colors.');
      return;
    }
    let newDisplayCount = displayCount + 1;
    setDisplayCount(newDisplayCount);
    if (colors.length < newDisplayCount) {
      newColors = [...colors, '#FF0000'];
      setColors(newColors);
    }
  }

  function removeColor() {
    setDisableAdd(false);
    if (displayCount - 1 < 2) {
      setDisableRemove(true);
      window.alert('There should be no less than 2 colors.');
      return;
    }
    let newDisplayCount = displayCount - 1;
    console.log({ newDisplayCount });
    setDisplayCount(newDisplayCount);
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
        {colors.slice(0, displayCount).map((color, index) => {
          const colorId = `color-${index}`;
          return (
            <ColorSwatch
              key={colorId}
              color={color}
              colorId={colorId}
              index={index}
              changeColor={changeColor}
            ></ColorSwatch>
          );
        })}
      </div>

      <DegreeTiltRange
        degrees={degrees}
        setDegrees={setDegrees}
      ></DegreeTiltRange>
    </div>
  );
}

export default Gradient;
