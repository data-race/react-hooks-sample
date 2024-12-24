import { useReducer } from "react";

interface State {
    count: number;
  }
  
  type Action = 
    | { type: 'increment' }
    | { type: 'decrement' };
  
  // Define the reducer function
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error('Unknown action type');
    }
  };

export default function ReducerHookDemo() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

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
      <h2>ReducerHookDemo</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
