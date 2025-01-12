import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/pricecard.css";

const PriceCard = () => {
  const [priceData, setPriceData] = useState(null);
  const [rank, setRank] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch price data
        const priceResponse = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price",
          {
            params: {
              ids: "bitcoin",
              vs_currencies: "inr,usd",
              include_24hr_change: true,
            },
          }
        );

        // Fetch rank data
        const rankResponse = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin"
        );

        setPriceData(priceResponse.data.bitcoin);
        setRank(rankResponse.data.market_cap_rank);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
  }, []);

  if (!priceData || rank === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="price-card">
      <div className="header">
        <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="Bitcoin" />
        <h2>Bitcoin BTC</h2>
        <span className="rank">Rank #{rank}</span>
      </div>
      <div className="price">
        <div className="priceandchange">
        <h1>${priceData.usd.toLocaleString()}</h1>
        <div className="change">
        <span
          className={`change-value ${
            priceData.usd_24h_change > 0 ? "positive" : "negative"
          }`}
        >
          <span>{priceData.usd_24h_change > 0 ? <i class="arrow up" style={{border: "solid green", borderWidth: "0 3px 3px 0" , transform: "rotate(-135deg)", WebkitTransform: "rotate(-135deg)"}}></i> : <i class="arrow down" style={{border: "solid red", borderWidth: "0 3px 3px 0" , transform: "rotate(45deg)", WebkitTransform: "rotate(45deg)"}}></i>}</span>
          {priceData.usd_24h_change.toFixed(2)}%
        </span>
        <span>(24H)</span>
      </div>
      </div>
        <h2>₹ {priceData.inr.toLocaleString()}</h2>
      </div>
      
    </div>
  );
};

export default PriceCard;
