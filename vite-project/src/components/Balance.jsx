import React, { useState } from "react";

export default function Balance({ income, expense }) {
  const [balance, setBalance] = useState(0);

  return (
    <div>
      <div className="balance">
        <h3 className="balance-heading">YOUR BALANCE</h3>
        <h1 className="balance-money">₹{balance}</h1>
      </div>
    </div>
  );
}
