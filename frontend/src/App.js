// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import People from "./components/People/People";
import Planet from "./components/Planet/Planet";
import Starship from "./components/Starship/Starship";
import Search from "./components/Search/Search";

function App() {
  const options = ["people", "planet", "starship", "search"];
  const [optionSelected, setOptionSelected] = useState(null);

  const renderOption = () =>{
    switch(optionSelected){
      case "people":
        return <People/>
      case "planet":
        return <Planet/>
      case "starship":
        return <Starship/>
        case "search":
        return <Search/>
      default:
        break;
    }
  }

  return (
    <div className="app">
      <h3>Please select an option:</h3>
      <div className="option--button">
        {options.map((option) => (
          <button
            name={option}
            onClick={(e) => setOptionSelected(`${e.target.name}`)}
            key={option}
          >
            {option.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="target">
        {renderOption()}
      </div>
      <footer className="footer"><p>2022 Kyle Piché ©</p></footer>
    </div>
  );
}

export default App;
