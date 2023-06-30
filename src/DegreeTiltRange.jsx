import React from 'react';

function DegreeTiltRange({ degrees, setDegrees }) {
  return (
    <div>
      <input
        type="range"
        id="degrees"
        name="degrees"
        min="0"
        max="360"
        value={degrees}
        onChange={() => {
          setDegrees(event.target.value);
        }}
      ></input>
      <label htmlFor="degrees">{degrees} Degrees</label>
    </div>
  );
}

export default DegreeTiltRange;
