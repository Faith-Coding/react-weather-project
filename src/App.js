import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          This project was coded by Akhigbe Faith and is {""}
          <a
            rel="noreferrer"
            href="https://github.com/faithomoighe/react-weather-app"
            target="_blank"
          >
            Open Sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
