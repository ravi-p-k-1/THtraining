import React, { useEffect, useState } from "react";

export const ColorInput = () => {
  const [RGB, setRGB] = useState('');

  const changeHandler=(value)=>{
    setRGB(value);
  };

  useEffect(() => {
    document.body.style.backgroundColor = '#'+RGB;
  }, [RGB]);
  

  return (
    <div>
      ColorInput
      <br />
      {"#"} 
      <input
        name="code"
        type="text"
        value={RGB}
        onChange={(e) => changeHandler(e.target.value)}
      /> 
    </div>
  );
};
