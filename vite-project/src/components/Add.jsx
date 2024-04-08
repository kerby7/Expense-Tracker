import React, { useState } from "react";

export default function ({ addIncome, addExpense }) {
  const [amount, setAmount] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const transactionAmount = parseInt(amount);
    if (!isNaN(transactionAmount)) {
      if (transactionAmount > 0) {
        addIncome(transactionAmount);
      } else {
        addExpense(Math.abs(transactionAmount));
      }
      setAmount("");
      setText("");
    } else {
      alert("Enter a valid amount");
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="transaction">
      <h3>Add new transaction</h3>
      <form className="amount-enter" onSubmit={handleSubmit}>
        <h4>Text</h4>
        <input
          type="text"
          className="expense-text"
          placeholder=" Enter text"
          value={text}
          onChange={handleTextChange}
        ></input>
        <h4>Amount</h4>
        <input
          type="text"
          className="expense-amount"
          placeholder=" Enter amount"
          value={amount}
          onChange={handleAmountChange}
        ></input>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </div>
  );
}
