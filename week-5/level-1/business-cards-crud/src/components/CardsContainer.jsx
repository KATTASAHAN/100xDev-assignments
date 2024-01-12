import React from "react";
import Card from "./Card";

const CardsContainer = ({ cards }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        flexWrap: "wrap",
        justifyContent: "center",
       
      }}
    >
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
};

export default CardsContainer;
