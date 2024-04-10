import React, { useState } from "react";
import Add from "./Add";
import History from "./History";
import Balance from "./Balance";

export default function Income() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [negative, setNegative] = useState(0);

  const addIncome = (amount, text) => {
    setIncome(income + amount);
    setTransactions([...transactions, { text, amount }]);
  };

  const addExpense = (amount, text) => {
    setExpense(expense + amount);
    amount = -amount;
    setTransactions([...transactions, { text, amount }]);
  };

  return (
    <>
      <Balance income={income} expense={expense} />
      <div className="flex justify-center items-center">
        <div className="mt-8 w-25vw flex h-20 justify-center items-center gap-10 shadow-md">
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
      <History transactions={transactions} negative={negative} />
      <Add addIncome={addIncome} addExpense={addExpense} />
    </>
  );
}
