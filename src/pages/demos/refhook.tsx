import { useEffect, useRef, useState } from "react";

function RefToValue() {
    const renderCount = useRef(0);
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    const [refresh, setRefresh] = useState(false);
    
    return <div style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        padding: "20px",
        gap: "20px",
        border: "1px solid white",
        borderRadius: "10px",
        margin: "20px",
      }}>
        <p>Render count: {renderCount.current}</p>
        <button onClick={() => setRefresh(!refresh)}>Refresh</button>
    </div>
}

function RefToDOM() {
    const inputRef = useRef<HTMLInputElement>(null);
    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return <div style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        padding: "20px",
        gap: "20px",
        border: "1px solid white",
        borderRadius: "10px",
        margin: "20px",
      }}>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>Focus the input</button>
    </div>
}


export default function RefHookDemo() {
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        width: "40%",
        padding: "20px",
        gap: "20px",
        border: "1px solid white",
        borderRadius: "10px",
        margin: "20px",
      }}>
      <h2>RefHookDemo</h2>
        <RefToValue />
        <RefToDOM />
    </div>
  );
}