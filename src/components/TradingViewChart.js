import React, { useEffect } from "react";
import "./css/TradingView.css";

const TradingViewChart = ({ symbol = "BTCUSD" }) => {
    useEffect(() => {
        try {
          if (window.TradingView) {
            new window.TradingView.widget({
              symbol: "BTCUSD",
              interval: "D",
              container_id: "tradingview_chart",
              locale: "en",
              theme: "light",
              style: "1",
              width: "100%",
              height: "400px",
            });
          } else {
            console.error("TradingView library is not loaded.");
          }
        } catch (error) {
          console.error("Error initializing TradingView widget:", error);
        }
      }, []);

  return <div id="tradingview_chart"></div>;
};

export default TradingViewChart;
