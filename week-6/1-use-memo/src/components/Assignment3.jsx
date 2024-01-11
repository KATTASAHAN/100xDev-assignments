import React, { useState, useMemo } from "react";
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: "Chocolates", value: 10 },
    { name: "Chips", value: 20 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 30 },
    // Add more items as needed
  ]);

  // Your code starts here
  const [count, setCount] = useState(0);
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
  const totalValue = useMemo(() => {
    let totalValue = 0;
    items.forEach(({ value }) => {
      console.log("ha");
      totalValue += value;
    });
    return totalValue;
  }, [items]);
  // Your code ends here
  return (
    <div>
      <Counter />
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Price: ${item.value}
          </li>
        ))}
      </ul>
      <p>Total Value: {totalValue}</p>
    </div>
  );
};

export default Assignment3;
