import React from "react";
import "./css/Tokenomics.css";
import Chart from "../Chart.PNG";

const Tokenomics = () => {
  

  return (
    <div className="about-bitcoin-section">
      <h2>Tokenomics</h2>
      <h3>Initial Distribution</h3>
      <img src={Chart} alt=""/>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
    </p>
    </div>
  );
};

export default Tokenomics;
