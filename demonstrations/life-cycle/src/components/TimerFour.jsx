// ./src/components/05-use-effect-conditional-updates/TimerFour.js
import React, { useState, useEffect } from "react";

function TimerFour() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect - Mounting (initial render)");
    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 10000);

    return () => {
      clearInterval(id);
      console.log("Component Unmounting");
    };
  }, []);
  

  useEffect(() => {                              // <== ADD
    console.log("useEffect - on update");
    document.title = count;
  }, [count] );     
  
  
  return (
    <div className="Timer">
      <h2>Timer Four</h2>
      <h3>{count}</h3>
    </div>
  );
}

export default TimerFour;
