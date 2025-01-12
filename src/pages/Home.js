import React from "react";
import PriceCard from "../components/PriceCard";
import TrendingCoins from "../components/TrendingCoins";
import TradingViewChart from "../components/TradingViewChart";
import CoinCarousel from "../components/CoinCarousel";
import { fetchTrendingCoins } from "../services/api";
import { useState,useEffect } from "react";
import PerformanceAndFundamentals from "../components/PerformanceandFundaemntals";
import Sentiment from "../components/Sentiment";
import AboutBitcoin from "../components/AboutBitcoin";
import YouMayAlsoLike from "../components/YouMayAlsoLike";
import NavBar from "../components/NavBar";
import NavBar2 from "../components/NavBar2";
import JoinCoinX from "../components/JoinCoinX";
import Team from "../components/Team";
import Tokenomics from "../components/Tokenomics";
import "../components/css/home.css";
const Home = () => {
    const [trendingCoins, setTrendingCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
          const coins = await fetchTrendingCoins();
          setTrendingCoins(coins);
          setLoading(false);
        };
    
        fetchData();
      }, []);
    
      if (loading) {
        return <p>Loading...</p>;
      }
  return (
    <>
    {/* <NavBar/>
    <div className="home">
      <div className="sec1">
      <PriceCard />
      <JoinCoinX/>
      </div>
      <div className="sec2">
      <TradingViewChart />
      <TrendingCoins />
      </div>
      <NavBar2/>
      <hr></hr>
      
      <CoinCarousel coins={trendingCoins}/>
    </div>
    <div>
    <PerformanceAndFundamentals/>
    <Sentiment/>
    <AboutBitcoin/>
    <Tokenomics/>
    <Team/>
    <YouMayAlsoLike/>
    </div> */}

<NavBar />
<div className="home">
  <div className="sec1">
    <PriceCard />
    <JoinCoinX />
  </div>
  <div className="sec2">
    <TradingViewChart />
    <TrendingCoins />
  </div>
  <NavBar2 />
  <hr />
  <CoinCarousel coins={trendingCoins} />
</div>
<div className="performance-fundamentals">
  <PerformanceAndFundamentals />
</div>
<div className="sentiment">
  <Sentiment />
</div>
<div className="about-bitcoin">
  <AboutBitcoin />
</div>
<div className="tokenomics">
  <Tokenomics />
</div>
<div className="team">
  <Team />
</div>
<div className="you-may-also-like">
  <YouMayAlsoLike />
</div>

    </>
  );
};

export default Home;
