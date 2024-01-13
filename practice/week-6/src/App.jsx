// import { memo, useState } from "react";

import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [id, setId] = useState("");

  return (
    <>
      {/* {todos?.map((todo) => (
        <Todo key={todo._id} title={todo.title} desc={todo.description} />
      ))} */}
      <button
        onClick={() => {
          setId("6598e3c0feee67dbff9b9b72");
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setId("65991a7f8d5cbd22edaaa61d");
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setId("659955e55315abf163a3d295");
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setId("659955eb5315abf163a3d298");
        }}
      >
        4
      </button>
      {id && <Todo id={id} />}
    </>
  );
}

export default App;

function Button({ id, setId, txt }) {
  return (
    <button
      onClick={() => {
        setId("659955eb5315abf163a3d298");
      }}
    >
      {txt}
    </button>
  );
}

function Todo({ id }) {
  const [todos, setTodos] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3000/todo?id=${id}`).then((response) => {
      setTodos(response.data.todo);
    });
  }, [id]);

  return (
    <div style={{ border: "1px solid white", margin: "5px" }}>
      <h3>{todos?.title}</h3>
      <p>{todos?.description}</p>
    </div>
  );
}

// CLASS 6.1 - memo(), Wrapper Component
// function App() {
//   const [name, setName] = useState("Sahan");

//   function handleOnClick() {
//     setName(Math.random() * 100);
//   }

//   return (
//     <div>
//       <button onClick={handleOnClick}>click me to change the title</button>
//       <Card>
//         <Para name="Esdeath" />
//       </Card>

//       <Card component={<Para name={name} />} />
//       <Card component={<Para name="Esdeath" />} />
//       <Card component={<Para name="Esdeath" />} />
//       <Card component={<Para name="Esdeath" />} />
//       <Card component={<Para name="Esdeath" />} />
//     </div>
//   );
// }

// const Card = memo(({ children }) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-around",
//         alignItems: "center",
//         border: "1px solid white",
//         padding: "10px",
//         borderRadius: "5px",
//         margin: "5px",
//       }}
//     >
//       {children}
//     </div>
//   );
// });

// const Para = memo(({ name }) => {
//   return <div>{name}</div>;
// });
