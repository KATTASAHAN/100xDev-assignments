import React, { useState } from "react";
import "../App.css";

const CreateNewCard = () => {
  let [create, setCreate] = useState(true);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <button onClick={() => setCreate((v) => (v = !v))}>
          Create Your Own Card
        </button>
      </div>
      {create && (
        <div
          style={{
            border: "1px solid white",
            borderRadius: "10px",
            height: "250px",
            margin: "20px",
            padding: "20px",
          }}
        >
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNewCard;
