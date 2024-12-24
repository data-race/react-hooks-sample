import { useMemo, useState } from "react";

function fib(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

function FibWithoutMemo() {
  const [n, setN] = useState(1);
  const result =
    fib(n).toString() + " Calculated at: " + new Date().toLocaleTimeString();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        padding: "20px",
        gap: "20px",
        border: "1px solid white",
        borderRadius: "10px",
        margin: "20px",
      }}
    >
      <h2>FibWithoutMemo</h2>
      <p>
        Fib({n}) = {result}
      </p>
      <button onClick={() => setN(n + 1)}>Increment</button>
    </div>
  );
}

function FibWithMemo() {
  const [n, setN] = useState(1);
  const result = useMemo(
    () =>
      fib(n).toString() + " Calculated at: " + new Date().toLocaleTimeString(),
    [n]
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        padding: "20px",
        gap: "20px",
        border: "1px solid white",
        borderRadius: "10px",
        margin: "20px",
      }}
    >
      <h2>FibWithMemo</h2>
      <p>
        Fib({n}) = {result}
      </p>
      <button onClick={() => setN(n + 1)}>Increment</button>
    </div>
  );
}

export default function MemoHookDemo() {
  const [refresh, setRefresh] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "40%",
        padding: "20px",
        gap: "20px",
        border: "1px solid white",
        borderRadius: "10px",
        margin: "20px",
      }}
    >
      <h2>MemoHookDemo</h2>
      <FibWithoutMemo />
      <FibWithMemo />
      <button onClick={() => setRefresh(!refresh)}>Refresh</button>
    </div>
  );
}
