import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
  const [entiredTitle, setEntiredTitle] = useState('')
  const [entiredAmount, setEntiredAmount] = useState('')
  const [entiredDate, setEntiredDate] = useState('')
  //const [userInput, setUserInput] = useState({
  //entiredTitle : "",
  //entiredAmount : "",
  // entiredDate : ""
  //})
  const titleChangeHandler = (e) => {
    //setUserInput({
    //...userInput,
    //entiredTitle: e.target.value
    //});
    //setUserInput((prevState) => {
    //return {...prevState, entiredTitle: e.target.value};
    //})
    setEntiredTitle(e.target.value)
    console.log(e.target.value)
  }
  const amountChangeHandler = (e) => {
    //setUserInput({
    //...userInput,
    //entiredAmount: e.target.value
    //});
    //setUserInput((prevState) => {
    //return {...prevState, entiredAmount: e.target.value};
    //})
    setEntiredAmount(e.target.value)
  }
  const dateChangeHandler = (e) => {
    //setUserInput({
    //...userInput,
    //entiredDate: e.target.value
    //});
    //setUserInput((prevState) => {
    //return {...prevState, entiredDate: e.target.value};
    //})
    setEntiredDate(e.target.value)
  }

  const inputChangeHandler = (identifire, value) => {
    if (identifire === 'title') {
      setEntiredTitle(value)
    } else if (identifire === 'amount') {
      setEntiredAmount(value)
    } else {
      setEntiredDate(value)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const formData = {
      title: entiredTitle,
      amount: entiredAmount,
      date: new Date(entiredDate)
    }
    props.onSaveExpenseData(formData);
    setEntiredTitle('');
    setEntiredAmount('');
    setEntiredDate('');
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>title</label>
            <input
              type="text"
              value={entiredTitle}
              onChange={(e) => inputChangeHandler('title', e.target.value)}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={entiredAmount}
              onChange={(e) => inputChangeHandler('amount', e.target.value)}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-1-1"
              max="2021-12-31"
              value={entiredDate}
              onChange={(e) => inputChangeHandler('date', e.target.value)}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  )
}

export default ExpenseForm
