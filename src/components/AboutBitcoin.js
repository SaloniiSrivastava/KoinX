import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/AboutBitcoin.css";

const AboutBitcoin = () => {
  const [data, setData] = useState(null);
  const [aboutBitcoin, setAboutBitcoin] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin"
        );
        setData(response.data);
        setAboutBitcoin(response.data.description.en); // Fetching 'About Bitcoin' description
      } catch (error) {
        console.error("Error fetching About Bitcoin data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="about-bitcoin-section">
      <h2>About Bitcoin</h2>
      <h3>What is Bitcoin?</h3>
      <p>
        Bitcoin's price today is ${data.market_data.current_price.usd}, with a
        24-hour trading volume of $
        {data.market_data.total_volume.usd.toLocaleString()}. BTC is{" "}
        {data.market_data.price_change_percentage_24h.toFixed(2)}% in the last
        24 hours. It is currently{" "}
        {data.market_data.price_change_percentage_7d.toFixed(2)}% from its
        7-day all-time high of $
        {data.market_data.high_24h.usd.toLocaleString()}, and{" "}
        {data.market_data.price_change_percentage_7d.toFixed(2)}% from its
        7-day all-time low of $
        {data.market_data.low_24h.usd.toLocaleString()}.
      </p>
      <hr></hr>
      <p>{aboutBitcoin}</p>
      <hr></hr>
      <h2>Already Holding Bitcoin?</h2>
      <div className="gradientTab">
      <div className="tab1">
        <img className="img" src="https://d2u3dcdbebyaiu.cloudfront.net/img/channel/logo/us/logo_1707763474.png" alt=""/>
        <div className="profit">
        <h3>Calculate your profits</h3>
        <button>Check Now &#8594;</button>
        </div>
      </div>
      <div className="tab2">
        <img className="img" src="https://finance400.com/wp-content/uploads/2022/11/bitpanda-referral-code-featured-1024x640.jpg" alt=""/>
        <div className="profit">
        <h3>Calculate your tax liability</h3>
        <button>Check Now &#8594;</button>
        </div>
      </div>
      </div>
      <hr></hr>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.</p>
    </div>
  );
};

export default AboutBitcoin;
