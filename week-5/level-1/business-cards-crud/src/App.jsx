import { useState } from "react";
import CardsContainer from "./components/CardsContainer";
import CreateNewCard from "./components/CreateNewCard";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Lokeshwar",
      desc: "A TA in 100xDevs Cohort 2.0",
      interests: ["Iconic", "Open Source", "App Dev"],
      linkedin: "https://linkedIN",
      twitter: "https://twitter",
    },
    {
      id: 2,
      name: "Lokesh",
      desc: "A TA in 100xDevs Cohort 2.0",
      interests: ["Iconic", "Open Source", "App Dev"],
      linkedin: "https://linkedIN",
      twitter: "https://twitter",
    },
    {
      id: 3,
      name: "war",
      desc: "A TA in 100xDevs Cohort 2.0",
      interests: ["Iconic", "Open Source", "App Dev"],
      linkedin: "https://linkedIN",
      twitter: "https://twitter",
    },
    {
      id: 4,
      name: "war",
      desc: "A TA in 100xDevs Cohort 2.0",
      interests: ["Iconic", "Open Source", "App Dev"],
      linkedin: "https://linkedIN",
      twitter: "https://twitter",
    },
    {
      id: 5,
      name: "war",
      desc: "A TA in 100xDevs Cohort 2.0",
      interests: ["Iconic", "Open Source", "App Dev"],
      linkedin: "https://linkedIN",
      twitter: "https://twitter",
    },
    {
      id: 6,
      name: "war",
      desc: "A TA in 100xDevs Cohort 2.0",
      interests: ["Iconic", "Open Source", "App Dev"],
      linkedin: "https://linkedIN",
      twitter: "https://twitter",
    },
    {
      id: 7,
      name: "war",
      desc: "A TA in 100xDevs Cohort 2.0",
      interests: ["Iconic", "Open Source", "App Dev"],
      linkedin: "https://linkedIN",
      twitter: "https://twitter",
    },
  ]);
  return (
    <>
      <Header />
      <div style={{ width: "1150px", margin: "0 auto" }}>
        <CreateNewCard />
        <CardsContainer cards={cards} />
      </div>
    </>
  );
}

export default App;
