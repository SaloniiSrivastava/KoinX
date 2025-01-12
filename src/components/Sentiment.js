import React from "react";
import "./css/Sentiment.css";
import Estimate from "../Estimate.PNG";
import trend from "../trend.png";
import Slider from "react-slick";
import document from "../documents.png";
import info from "../info.png";
import grey from "../grey-heron.png";


const Sentiment = () => {
  const marketSentiment = {
    buy: 76,
    hold: 8,
    sell: 16,
  };

  const settings = { infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, arrows: true, };

  return (
    <>

      <div className="sentiment-section">
        <h2>Sentiment</h2>
        <h3>Key Events <i><img style={{ width: "20px", height: "15px" }} src={info} alt="" /></i></h3>

        <Slider {...settings}> <div className="t1">
          <div className="content-wrapper">
            <img className="icon" src={trend} alt="Trend" />
            <div className="text-content">
              <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
          <div className="t2">
            <div className="content-wrapper"> <img className="icon" src={document} alt="Document" /> <div className="text-content"> <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> </div> </div> </div> <div className="t3"> <div className="content-wrapper"> <img className="icon" src={grey} alt="Grey" /> <div className="text-content"> <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> </div> </div> </div> </Slider>
        <h3>Analyst Estimates <i><img style={{ width: "20px", height: "15px" }} src={info} alt="" /></i> </h3>
        <div className="analyst-estimates">

          <img src={Estimate} alt="estimate" />
          <div className="sentiment-bar">
            <div className="b">
              <p>Buy</p>
              <div className="bar buy" style={{ width: `${marketSentiment.buy}%` }}>

              </div>
              {marketSentiment.buy}%
            </div>
            <div className="b">
              <p>Hold</p>
              <div className="bar hold" style={{ width: `${marketSentiment.hold}%` }}>
              </div>{marketSentiment.hold}%
            </div>
            <div className="b">
              <p>Sell</p>
              <div className="bar sell" style={{ width: `${marketSentiment.sell}%` }}>

              </div>
              {marketSentiment.sell}%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sentiment;
