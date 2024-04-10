import React from "react";

export default function History({ transactions }) {
  return (
    <div className="history">
      <h1 className="history-heading">History</h1>
      <ul className="history-list">
        {transactions.map((transaction, index) => (
          <li key={index}>
            <span className="texty">{transaction.text}</span>
            <span className="amounty">
              {transaction.amount >= 0 ? (
                <span>+₹{transaction.amount}</span>
              ) : (
                <span>-₹{Math.abs(transaction.amount)}</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
