import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/Performanceandfundamentals.css"; // Add styling in this file

const PerformanceAndFundamentals = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const low24h = data.market_data.low_24h.usd;
  const high24h = data.market_data.high_24h.usd;
  const currentPrice = data.market_data.current_price.usd;

  const low52w = data.market_data.atl.usd; // All-time low can represent the 52-week low
  const high52w = data.market_data.ath.usd;

  // Calculate percentage for the progress bar
  const todayProgress =
    ((currentPrice - low24h) / (high24h - low24h)) * 100;
    const week52Progress =
    ((currentPrice - low52w) / (high52w - low52w)) * 100;

    const marketData = data.market_data;

  const bitcoinPrice = marketData.current_price.usd;
  const marketCap = marketData.market_cap.usd;
  const marketCapRank = data.market_cap_rank;
  const marketCapDominance = marketData.market_cap_change_percentage_24h;
  const volume = marketData.total_volume.usd;
  const ath = marketData.ath.usd;
  const athChange = marketData.ath_change_percentage.usd;
  const atl = marketData.atl.usd;
  const atlChange = marketData.atl_change_percentage.usd;

  return (
    <div className="performance-fundamentals">
     
     <div className="performance">
        <h2>Performance</h2>

        {/* Today's Low/High */}
        <div className="row">
          <div>
            <p>Today's Low</p>
            <h3>{low24h.toLocaleString()} USD</h3>
          </div>
          <div className="bar-container">
            <div className="bar">
              <div
                className="bar-progress"
                
              ></div>
            </div>
            <p style={{ textAlign: "center" }}>
              Current: {currentPrice.toLocaleString()} USD
            </p>
          </div>
          <div>
            <p>Today's High</p>
            <h3>{high24h.toLocaleString()} USD</h3>
          </div>
        </div>

        {/* 52-Week Low/High */}
        <div className="row">
          <div>
            <p>52W Low</p>
            <h3>{low52w.toLocaleString()} USD</h3>
          </div>
          <div className="bar-container">
            <div className="bar">
              <div
                className="bar-progress"
                
              ></div>
            </div>
            
          </div>
          <div>
            <p>52W High</p>
            <h3>{high52w.toLocaleString()} USD</h3>
          </div>
        </div>
      </div>
    
      
      <div className="fundamentals">
      <h2>Fundamentals</h2>
      <div className="section">
        <div className="column">
          <div className="row">
            <p>Bitcoin Price:</p>
            <span>${bitcoinPrice.toLocaleString()}</span>
          </div>
          <div className="row">
            <p>24h Low / 24h High:</p>
            <span>${low24h.toLocaleString()} / ${high24h.toLocaleString()}</span>
          </div>
          <div className="row">
            <p>Trading Volume:</p>
            <span>${volume.toLocaleString()}</span>
          </div>
          <div className="row">
            <p>Market Cap Rank:</p>
            <span>#{marketCapRank}</span>
          </div>
        </div>
        <div className="column">
          <div className="row">
            <p>Market Cap:</p>
            <span>${marketCap.toLocaleString()}</span>
          </div>
          <div className="row">
            <p>Market Cap Dominance:</p>
            <span>{marketCapDominance.toFixed(2)}%</span>
          </div>
          <div className="row">
            <p>All-Time High:</p>
            
            <span>
              ${ath.toLocaleString()} {athChange > 0 ? <span style={{color:"green"}}>{athChange.toFixed(2)}% </span> : <span style={{color:"red"}}>{athChange.toFixed(2)}% </span>  }
            </span>
          </div>
          <div className="row">
            <p>All-Time Low:</p>
            <span>
            ${atl.toLocaleString()} {atlChange > 0 ? <span style={{color:"green"}}>{atlChange.toFixed(2)}% </span> : <span style={{color:"red"}}>{atlChange.toFixed(2)}% </span>  }
            </span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PerformanceAndFundamentals;
