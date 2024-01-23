import { useCallback, useState } from "react";
import "./App.css";
import { CopyButton } from "./CopyButton";
// import { UseMemoHooks } from './UseMemoHooks';
// import { UseRefHooks } from './UseRefHooks';
// import { UseCallbackHooks } from "./UseCallbackHooks";

function App() {
  // const [val, setVal] = useState(false);

  // const callback = () => {
  //   return Math.random();
  // };

  // const callback = useCallback(
  //   (pow = 1) => {
  //     return Math.random()*pow;
  //   },
  //   []
  // )
  

  return (
    <div className="App">
{/* -------------------------------------------------------------------------------------------------------------------- */}

  {/* useCallBack hooks example */}
      {/* <UseCallbackHooks callback={callback} />
      <button
        onClick={(e) => {
          setVal(!val);
        }}
      >bool change</button> */}

{/* -------------------------------------------------------------------------------------------------------------------- */}

  {/* Custom Hooks Example Copy To Clipboard */}
      {/* I am Ravi<CopyButton code={'I am Ravi'} />
      I am Jinesh<CopyButton code={'I am Jinesh'} />
      I am Kushal<CopyButton code={'I am Kushal'} /> */}

{/* -------------------------------------------------------------------------------------------------------------------- */}
    </div>
  );
}

export default App;
