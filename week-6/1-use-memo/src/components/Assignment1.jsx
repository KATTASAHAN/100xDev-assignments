import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);
  const [count, setCount] = useState(0);
  // Your solution starts here
  let expensiveValue = useMemo(() => {
    console.log("In Memo");
    let fexpensiveValue = 1;
    for (let i = input; i >= 1; i--) {
      fexpensiveValue = fexpensiveValue * i;
    }
    return fexpensiveValue;
  }, [input]);

  const Counter = () => {
    return (
      <>
        <button
          onClick={() => {
            setCount((c) => c + 1);
          }}
        >
          Counter {count}
        </button>
      </>
    );
  };

  // Your solution ends here

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>

      <Counter />
    </div>
  );
}
