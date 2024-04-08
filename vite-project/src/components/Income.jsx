import React, { useState } from "react";
import Add from "./Add";
import History from "./History";
import Balance from "./Balance";

export default function Income() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const addIncome = (amount) => {
    setIncome(income + amount);
  };

  const addExpense = (amount) => {
    setExpense(expense + amount);
  };

  return (
    <>
      <Balance income={income} expense={expense} />
      <div className="container">
        <div className="amount">
          <div className="income">
            <h3 className="income-heading">INCOME</h3>
            <h2 className="money-1">₹{income}</h2>
          </div>
          <div className="expense">
            <h3 className="income-heading">EXPENSE</h3>
            <h2 className="money-2">₹{expense}</h2>
          </div>
        </div>
      </div>
      <History />
      <Add addIncome={addIncome} addExpense={addExpense} />
    </>
  );
}
