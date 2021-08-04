import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Puppeteer } from "puppeteer";

//const puppeteer = require('puppeteer');

const Prices = () => {
  
    const [priceData, setPriceData] = useState([]);
    // fetch your price data from the server when the component mounts
    // set that data to the priceData state property
  
    useEffect(() => {
      getPrices();
    }, [])
  
    const getPrices = () => {
      axios()
        .get('http://localhost:5000/api/prices')
        .then(res => {
          console.log("get prices response", res);
          setPriceData(res.data);
        })
        .catch(err => console.log(err.res));
    };
  
    return (
      <>
        <Prices prices={priceData} updatePrices={setPriceData} />
      </>
    );
  };
  export default Prices;