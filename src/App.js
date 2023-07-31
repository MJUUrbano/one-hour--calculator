import logo from "./logo.svg";
import "./App.css";
import { v4 as uuid } from "uuid";
import React, { useState } from "react";

function App() {
  const inputs = [1, 2, 3, "/", 4, 5, 6, "-", 7, 8, 9, "+", ".", 0, "=", "*"];
  const [input, setInput] = useState("");
  const handleInputClick = (e) => {
    if (input == "Syntax Error" || input == "Infinity") {
      setInput(e.target.getAttribute("value"));
    }
    setInput((input) => input + e.target.getAttribute("value"));
  };

  const handleEqual = (e) => {
    try {
      setInput(eval(input));
    } catch (e) {
      if (e instanceof SyntaxError) {
        setInput("Syntax Error");
      }
    }
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="head">
          <div className="display">{input != 0 ? input : 0}</div>
          <div className="clear" onClick={handleClear}>
            C
          </div>
        </div>
        <div className="inputs">
          {inputs.map((input) => {
            if (input == "=") {
              return (
                <div
                  id={uuid()}
                  value={input}
                  className="input"
                  onClick={handleEqual}
                >
                  {input}
                </div>
              );
            } else {
              return (
                <div
                  id={uuid()}
                  value={input}
                  className="input"
                  onClick={handleInputClick}
                >
                  {input}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
