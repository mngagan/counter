import "./styles.css";
import React from "react";

let counterRef = null;
export default function App() {
  const [isCounting, setIsCounting] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("in is counting", isCounting);
    if (isCounting) {
      counterRef = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    } else {
      clearInterval(counterRef);
      counterRef = null;
    }
  }, [isCounting]);

  const handleReset = () => {
    setIsCounting(false);
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Count is - {count}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setIsCounting(!isCounting)}>
        {isCounting ? "Pause" : "Start"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
