import React from "react";

const Header = () => {
  return (
    <div
      style={{
        background: "black",
        top: 0,
        position: "sticky",
        height: "60px",
        marginBottom: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 30px",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          border: "1px solid silver",
          borderRadius: "50%",
        }}
      ></div>
      <h1>Business Cards</h1>
      <button>Log In/Sign Up</button>
    </div>
  );
};

export default Header;
