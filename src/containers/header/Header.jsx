import React from "react";
import "./Header.css";
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let’s Build Something together amazing with GPT-3 OpenAI @V2 Solutions on Sept 10th @2212IST!
        </h1>
        <p>At V2 Solutions, We are transforming Industries with Cutting-Edge AI Services and Expertise to Drive Efficiency, Growth, and Innovation!</p>
        <div className="gpt3__header-content__input">
          <input  type="email" placeholder="Your Email Address"/>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people"/>
          <p>4,800 people requested access a visit in last 24 hours</p>
        </div>
      </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="ai"/>
        </div>
    </div>
  );
};

export default Header;
