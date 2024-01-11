import React, { useState, useCallback, useEffect } from "react";

// Create a component with a text input field and a button. The goal is to display an alert with the text entered when the button is clicked. Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.
// Currently we only have inputText as a state variable and hence you might not see the benefits of
// useCallback. We're also not passing it down to another component as a prop which is another reason for you to not see it's benefits immedietely.

export function Assignment2() {
  const [inputText, setInputText] = useState("");

  // Your code starts here
  const showAlert = useCallback(() => {
    alert(inputText);
  }, [inputText]);

  useEffect(() => {
    console.log("showAlert function recreated");
  }, [showAlert]);

  const [c, setC] = useState(0);
  const Count = () => {
    return (
      <>
        <button
          onClick={() => {
            setC((c) => c + 1);
          }}
        >
          btn {c}
        </button>
      </>
    );
  };
  // Your code ends here

  return (
    <div>
      <Count />
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter some text"
      />
      <Alert showAlert={showAlert} />
    </div>
  );
}

function Alert({ showAlert }) {
  return <button onClick={showAlert}>Show Alert</button>;
}
