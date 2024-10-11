import React from "react";
import "./Offers.css";
import exclusive_img from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>offers for you</h1>
        <p>only on best sellers products</p>
        <button>Check now</button>
      </div>
      <div className="offer-right">
        <img src={exclusive_img} alt="" />
      </div>
    </div>
  );
};

export default Offers;
