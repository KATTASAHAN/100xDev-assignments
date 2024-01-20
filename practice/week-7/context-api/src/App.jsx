import { useContext, useState } from "react";
import "./App.css";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={[count, setCount]}>
        <Count />
      </CountContext.Provider>
    </>
  );
}

function Count() {
  return (
    <>
      <CountRender />
      <Buttons />
    </>
  );
}

function CountRender() {
  const count = useContext(CountContext)[0];
  return <>{count}</>;
}

function Buttons() {
  const setCount = useContext(CountContext)[1];
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>++</button>
      <button onClick={() => setCount((c) => c - 1)}>--</button>
    </>
  );
}

export default App;
