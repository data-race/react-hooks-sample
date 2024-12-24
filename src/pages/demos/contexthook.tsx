import React from "react";

function Wrapper({ children }: { children: React.ReactNode }) {
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
      {children}
    </div>
  );
}

function DeepComponentTree() {
  return (
    <Wrapper>
      <Wrapper>
        <Wrapper>
          <InnerComponent />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

function InnerComponent() {
  const { count } = React.useContext(TestContext);
  return <p>Count: {count}</p>;
}

type TestContextType = {
  count: number;
};

const TestContext = React.createContext<TestContextType>({ count: 0 });

export default function ContextHookDemo() {
  const [count, setCount] = React.useState(0);

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
      <h2>ContextHookDemo</h2>
      <TestContext.Provider value={{ count: count }}>
        <DeepComponentTree />
        <Wrapper>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </Wrapper>
      </TestContext.Provider>
    </div>
  );
}
