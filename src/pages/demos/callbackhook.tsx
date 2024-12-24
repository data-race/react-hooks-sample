import React, { useCallback, useState } from "react";

function TODO({
  addTodoCallback,
  todos,
}: {
  addTodoCallback: () => void;
  todos: string[];
}) {
  console.log("TODO: Render at", new Date().toLocaleTimeString());

  return (
    <div
      style={{
        padding: "20px",
        gap: "20px",
        border: "1px solid white",
        borderRadius: "10px",
        margin: "20px",
      }}
    >
      <p>TODO: Render at {new Date().toLocaleTimeString()}</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={() => addTodoCallback()}> Call AddTodoCallback</button>
    </div>
  );
}

function Counter({
  incrementCallback,
  count,
}: {
  incrementCallback: () => void;
  count: number;
}) {
  console.log("Counter: Render at", new Date().toLocaleTimeString());

  return (
    <div
      style={{
        padding: "20px",
        gap: "20px",
        border: "1px solid white",
        borderRadius: "10px",
        margin: "20px",
      }}
    >
      <p>
        Count: {count}, render at: {new Date().toLocaleTimeString()}
      </p>
      <button onClick={() => incrementCallback()}>
        {" "}
        Call IncrementCallback
      </button>
    </div>
  );
}

const TODOMemo = React.memo(TODO);
const CounterMemo = React.memo(Counter);

export default function CallbackDemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["new TODO"]);

  const addTodo = useCallback(() => {
    setTodos([...todos, "new TODO"]);
  }, [todos]);
  const increment = () => {
    setCount(count + 1);
  };

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
      <h2>CallbackDemo</h2>
      <div>Parent: Render at {new Date().toLocaleTimeString()}</div>
      <TODOMemo addTodoCallback={addTodo} todos={todos} />
      <CounterMemo incrementCallback={increment} count={count} />
      <button onClick={() => {
        setTodos(["new TODO"]);
        setCount(0);
      }}>Refresh</button>
    </div>
  );
}
