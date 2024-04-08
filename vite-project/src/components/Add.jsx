import React from 'react'

export default function () {
  return (
    <div className='transaction'>
      <h3>Add new transaction</h3>
      <form className='amount-enter'>
        <h4>Text</h4>
        <input type='text' className='expense-text' placeholder=' Enter text'></input>
        <h4>Amount</h4>
        <input type='text' className='expense-amount' placeholder=' Enter amount'></input>
        <button className='btn' type='submit'>Add transaction</button>
      </form>
    </div>
  )
}
