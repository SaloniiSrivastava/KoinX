import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import "./css/YouMayAlsoLike.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const YouMayAlsoLike = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);


  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const coins = response.data.coins.map((coin) => ({
          id: coin.item.id,
          name: coin.item.name,
          symbol: coin.item.symbol.toUpperCase(),
          price: coin.item.data.price, // Use the BTC price as an example
          sparkline: coin.item.data.sparkline,
          image: coin.item.thumb,
          priceChange24h: coin.item.data.price_change_percentage_24h.btc,
        }));
        setTrendingCoins(coins);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", borderRadius: "50%", color: "gray", boxShadow: "2px 2px 5pxrgb(218, 207, 207)",backgroundColor:"gray" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", borderRadius: "50%", color: "gray", boxShadow: "2px 2px 5pxrgb(231, 206, 206)",backgroundColor:"gray" }}
        onClick={onClick}
      />
    );
  }


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 3 items per row
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 coin per row on smaller screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="you-may-also-like">
      

      <div className="carousel-container">
      <h2>You May Also Like</h2>
        <Slider ref={sliderRef1} {...settings}>
          {trendingCoins.slice(6, 12).map((coin, index) => (
            <div key={index} className="carousel-item">
              <div className="coin-top">
                <img
                  src={coin.image}
                  alt={`${coin.name} logo`}
                  className="coin-logo"
                />
                <p className="coin-name">
                  {coin.name}
                </p>
                {coin.priceChange24h && (
                  <p
                    className={`coin-price-change ${coin.priceChange24h < 0 ? "negative" : "positive"
                      }`}
                  >
                    {coin.priceChange24h.toFixed(2)}%
                  </p>
                )}
              </div>
              <div className="coin-details">

                <p className="coin-price">${coin.price.toFixed(5)}</p>
                {coin.sparkline && (
                  <img
                    src={String(coin.sparkline)}
                    alt={`${coin.name} graph`}
                    className="coin-graph"
                  />
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>




      <div className="carousel-container">


        <h2>Trending Coins</h2>

        <Slider ref={sliderRef2} {...settings}>
          {trendingCoins.slice(0, 6).map((coin, index) => (
            <div key={index} className="carousel-item">
              <div className="coin-top">
                <img
                  src={coin.image}
                  alt={`${coin.name} logo`}
                  className="coin-logo"
                />
                <p className="coin-name">
                  {coin.name}
                </p>
                {coin.priceChange24h && (
                  <p
                    className={`coin-price-change ${coin.priceChange24h < 0 ? "negative" : "positive"
                      }`}
                  >
                    {coin.priceChange24h.toFixed(2)}%
                  </p>
                )}
              </div>
              <div className="coin-details">

                <p className="coin-price">${coin.price.toFixed(5)}</p>
                {coin.sparkline && (
                  <img
                    src={String(coin.sparkline)}
                    alt={`${coin.name} graph`}
                    className="coin-graph"
                  />
                )}
              </div>
            </div>
          ))}
        </Slider>

      </div>

    </div>
  );
};

export default YouMayAlsoLike;
