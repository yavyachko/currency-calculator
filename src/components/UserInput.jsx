import React, { useState } from "react";

export default function UserInput({handleUserInput , userInput}) {



  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Invstment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) => {
              handleUserInput("initialInvestment", e.target.value);
            }}
            required
          />
        </p>
        <p>
          <label htmlFor="">Annual Invstment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) => {
              handleUserInput("annualInvestment", e.target.value);
            }}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) => {
              handleUserInput("expectedReturn", e.target.value);
            }}
            required
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(e) => {
              handleUserInput("duration", e.target.value);
            }}
            required
          />
        </p>
      </div>
    </section>
  );
}
