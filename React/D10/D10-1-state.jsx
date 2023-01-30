// App.js
 
import "./App.css";
import { useState } from "react";
import Counter from "./components/01-use-state/Counter";
 
function App() {
  const [show, setShow] = useState(true);
 
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        { show ? "Hide" : "Show"}
      </button>
      {show && <Counter />}
    </div>
  );
}
 
export default App;