import { useState } from "react";
import "./App.css";
import Hero from "./Sections/Hero/Hero";
import Navbar from "./Sections/Navbar/Navbar";
import Players from "./Sections/Players/Players";

function App() {
  const [totalCoin, setTotalCoin] = useState(5000);
  // checking
  return (
    <>
      <Navbar totalCoin={totalCoin}></Navbar>
      <Hero></Hero>
      <Players totalCoin={totalCoin} setTotalCoin={setTotalCoin}></Players>
    </>
  );
}

export default App;
