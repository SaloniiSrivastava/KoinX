import React from "react";
import Slider from "react-slick";

const CoinCarousel = ({ coins = [] }) => {
    if (!coins.length){
        return <p></p>
    }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {coins.map((coin) => (
        <div key={coin.item.id} className="coin-card">
          <img src={coin.item.small} alt={coin.item.name} />
          <p>{coin.item.name} ({coin.item.symbol})</p>
          <p>Price: ${coin.item.price_btc.toFixed(8)}</p>
        </div>
      ))}
    </Slider>
  );
};

export default CoinCarousel;
