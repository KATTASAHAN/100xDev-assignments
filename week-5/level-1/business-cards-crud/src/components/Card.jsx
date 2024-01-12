import React from "react";

const Card = ({ card }) => {
  return (
    <div
      style={{
        border: "1px solid white",
        padding: "30px",
        borderRadius: "10px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
      }}
    >
      <div style={{ padding: "0px 0px 15px 0px" }}>
        <h3>{card.name}</h3>
        <p>{card.desc} </p>
      </div>
      <h4>Interests</h4>
      {card.interests.map((interest, i) => {
        return <p key={card.id + i}>{interest}</p>;
      })}
      <div
        style={{
          margin: "20px 0px 0px",
          display: "flex",
          justifyContent: "space-between",
          width: "215px",
        }}
      >
        <a href={card.linkedin} target="_blank">
          LinkedIn
        </a>
        <a href={card.twitter} target="_blank">
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Card;
