import { useEffect, useState } from "react";
import "./App.css";
import { usePageBottom } from "./usePageBottom";

function App() {
  const bottom = usePageBottom();
  const [items, setItems] = useState(["item 1", "item 2", "item 3", "item 4"]);

  useEffect(() => {
    if (bottom) {
      var tempItems = [...items];
      for (let i = 0; i < 4; i++) {
        tempItems.push(`items ${tempItems.length + 1}`);
      }
      setItems(tempItems);
    }
  }, [bottom]);

  return (
    <div key={items.length} className="App">
      {items.map((item, index) => {
        return (
          <div key={index} className="pbitem">
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default App;
