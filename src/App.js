import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

import Prices from "./Prices";

function App() {
  const [colorList, setColorList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to start the party.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>
        Price data to be rendered below.
      </p>
      <Prices prices={priceData} updatePrices={setPriceData} />
    </div>
  );
}

export default App;