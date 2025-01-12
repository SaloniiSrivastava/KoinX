import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/TrendingCoins.css";

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [positive, setPositive] = useState(false);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const coins = response.data.coins.slice(0, 3).map((coin) => ({
          id: coin.item.id,
          name: coin.item.name,
          symbol: coin.item.symbol.toUpperCase(),
          rank: coin.item.market_cap_rank,
          image: coin.item.thumb,
          priceChange24h: coin.item?.data?.price_change_percentage_24h?.btc,
        }));
        setTrendingCoins(coins);
        console.log(coins);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="trending-coins">
      <h2>Trending Coins (24h)</h2>
      <ul>
        {trendingCoins.map((coin) => (
          <li key={coin.id} className="trending-coin">
            <img src={coin.image} alt={`${coin.name} logo`} />
            <div className="coin-details2">
              <div>
              <p className="coin-name">{coin.name} ({coin.symbol})</p></div>
              <div>
              {coin.priceChange24h && (
                  <p
                    className={`coin-price-change ${coin.priceChange24h < 0 ? "negative" : "positive"
                      }`}
                  >
                    <span>{coin.priceChange24h >= 0 ? <i class="arrow up" style={{border: "solid green", borderWidth: "0 3px 3px 0" , transform: "rotate(-135deg)", WebkitTransform: "rotate(-135deg)"}}></i> : <i class="arrow down" style={{border: "solid red", borderWidth: "0 3px 3px 0" , transform: "rotate(45deg)", WebkitTransform: "rotate(45deg)"}}></i>}</span>
                    
                    {coin.priceChange24h.toFixed(2)}%
                  </p>
                )}
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCoins;
