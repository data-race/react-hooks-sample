import { useState } from "react";

export default function StateHookDemo() {
    let countNotInState = 0;
    const [count, setCount] = useState(0);


  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          gap: "20px",
          border: "1px solid white",
          borderRadius: "10px",
          margin: "20px",
          width: "40%",
        }}
      >
        <h2>useStateHookDemo</h2>
        <p>Count not in state: {countNotInState}</p>
        <button onClick={() => countNotInState++}>Increment</button>
        <p>Count in state: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  );
}
