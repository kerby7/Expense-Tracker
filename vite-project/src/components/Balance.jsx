import React, { useState } from "react";

export default function Balance({ income, expense }) {
  const balance = income - expense;

  return (
    <div>
      <div className="flex justify-center items-center flex-col mt-8 w-80vw">
        <h3 className="text-s">YOUR BALANCE</h3>
        <h1 className="font-extrabold text-s">₹{balance}</h1>
      </div>
    </div>
  );
}
