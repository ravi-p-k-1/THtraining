import React, { useState } from "react";

export const RowColumnInput = () => {
  const [RCinput, setRCinput] = useState({
    row: 0,
    col: 0,
  });

  const changeHandler = (name, value) => {
    setRCinput({
      ...RCinput,
      [name]: value,
    });
    if(name==='col'){
        let str='';
        for (let i = 0; i < value; i++) {
            str+=' auto';
        }
        document.getElementById('grid-container').style.gridTemplateColumns = str;
    }
  };

  const randomColorGenerator = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <div>
      <input
        name="row"
        value={RCinput.row}
        onChange={(e) => changeHandler(e.target.name, e.target.value)}
      />
      <input
        name="col"
        value={RCinput.col}
        onChange={(e) => changeHandler(e.target.name, e.target.value)}
      />
      <div id="grid-container" className="grid-container">
        {Array.from({ length: RCinput.row * RCinput.col}, (_, i) => (
          <div key={i} className="grid-item"
          style={{
            backgroundColor: "#" + randomColorGenerator(),
          }}>
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};
