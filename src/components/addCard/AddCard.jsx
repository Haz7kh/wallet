import React, { useState } from "react";
import "./add-card.css";
import { Link } from "react-router-dom";

export default function AddCard() {
  const cardLogo = {
    bitcoin: "./images/Bitcoin.svg",
    ninja: "./images/Group.svg",
    chain: "./images/chain.svg",
    evil: "./images/Subtract.svg",
    sim: "./images/sim.svg",
  };

  const [type, setType] = useState("bitcoin");
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [thru, setThru] = useState("");

  const cardTypeHandler = (event) => {
    setType(event.target.value);
  };

  const cardNumberHandler = (event) => {
    let input = event.target.value.replace(/\D/g, "");

    input = input.substring(0, 19);

    input = input.replace(/(\d{4})(?=\d)/g, "$1 ");

    setCardNumber(input);
  };

  const cardNameHandler = (event) => {
    setName(event.target.value);
  };

  const cardThruHandler = (event) => {
    let input = event.target.value.replace(/\D/g, "");

    input = input.substring(0, 4);

    input = input.replace(/(\d{2})(?=\d)/g, "$1/");
    setThru(input);
  };

  return (
    <div className="card">
      <div className="container">
        <h2>ADD A NEW BANK CARD</h2>
        <div className="content">
          <p>NEW CARD</p>
          <div className={`card-box selected-card ${type}`}>
            <div className="card-content">
              <div className="logo-content">
                <img src={cardLogo.sim} alt="Sim" />
                <img src={cardLogo[type]} alt={type} />
              </div>
              <div className="card-number">
                <span>{cardNumber}</span>
              </div>
              <div className="card-info">
                <div className="card-info-title">
                  <span>cardholder name</span>
                  <span>Valid thru</span>
                </div>
                <div className="card-info-content">
                  <span>{name}</span>
                  <span>{thru}</span>
                </div>
              </div>
            </div>
          </div>
          <form>
            <div>
              <label htmlFor="type">Card Number:</label>
              <input
                type="text"
                value={cardNumber}
                onChange={cardNumberHandler}
                maxLength={19}
                placeholder="XXXX XXXX XXXX XXXX"
              />
            </div>
            <div>
              <label htmlFor="type">Card Holder Name:</label>
              <input
                type="text"
                value={name}
                onChange={cardNameHandler}
                placeholder="FIRSTNAME LASTNAME"
              />
            </div>
            <div className="cvv-content">
              <div>
                <label htmlFor="type">Valid THRU:</label>
                <input
                  type="text"
                  value={thru}
                  onChange={cardThruHandler}
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label htmlFor="type">CVV:</label>
                <input type="text" placeholder="CVV" />
              </div>
            </div>
            <div>
              <select value={type} onChange={cardTypeHandler}>
                <option value="bitcoin">BITCOIN</option>
                <option value="ninja">NINJA</option>
                <option value="chain">CHAIN</option>
                <option value="evil">EVIL</option>
              </select>
            </div>
          </form>
          <button className="black-btn">Add Card</button>
        </div>
        <button className="black-btn">
          <Link to={"/"}>Back</Link>
        </button>
      </div>
    </div>
  );
}
