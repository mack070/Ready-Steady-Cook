import { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "./App.css";

export default function App() {
  const [Planets, savePlanets] = useState(0);
  const [pps, setPps] = useState(1);

  useEffect(() => {
    const myInterval = setInterval(() => {
      addPlanet();
    }, 1000 / pps);

    return () => {
      clearInterval(myInterval);
    };
  }, [pps]);

  function addPlanet() {
    savePlanets((currentPlanets) => {
      return currentPlanets + 1;
    });
  }

  function buyPlanet() {
    setPps(pps + 1);
  }

  return (
    <div>
      <h1>Planet Protector</h1>
      <button onClick={addPlanet}>Save A Planet</button>
      <button onClick={buyPlanet}>Relocate A Planet</button> //Buy an upgrade
      <p>I have {Planets} planets</p>
      <p>I save {pps} planets per second</p>
    </div>
  );
}
