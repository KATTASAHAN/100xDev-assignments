import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  );
}

function Count() {
  return (
    <>
      <RenderCount />
      <Buttons />
      <EvenOdd />
    </>
  );
}

function EvenOdd() {
  return <>{useRecoilValue(evenSelector) && "This is Even"}</>;
}

function RenderCount() {
  const count = useRecoilValue(countAtom);
  return <>{count}</>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("Buttons Re-render");
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>++</button>
      <button onClick={() => setCount((c) => c - 1)}>--</button>
    </>
  );
}

export default App;
