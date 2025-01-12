import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/JoinCoinX.css";
import Join from "../Join.PNG";

const JoinCoinX = () => {
  

  return (
    <div className="join-card">
      <h2> Get Started with CoinX for FREE </h2>
      <p> With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
      <img src={Join} alt=""/>
      <button> Get Started for FREE &#8594; </button>
    </div>
  );
};

export default JoinCoinX;
