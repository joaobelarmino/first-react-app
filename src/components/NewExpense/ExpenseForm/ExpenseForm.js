import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: ''
  // });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.value }
    // });
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, amount: event.target.value }
    // });
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, date: event.target.value }
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const originalDate = new Date(date);
    const newExpenseData = {
      title: title,
      amount: amount,
      date: new Date(originalDate.valueOf() + originalDate.getTimezoneOffset() * 60000),
    };

    props.onSaveNewExpense(newExpenseData);
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form className="form-expense" onSubmit={submitHandler}>
      <div className="form-expense__controls">
        <div className="form-expense__control">
          <input
            type="text"
            placeholder=" "
            value={title}
            onChange={titleChangeHandler}
          />
          <label className="label-name">
            <span className="content-name"> Título: </span>
          </label>
        </div>
        <div className="form-expense__control">
          <input
            type="number"
            min="0.01"
            step="0.01"
            placeholder=" "
            value={amount}
            onChange={amountChangeHandler}
          />
          <label className="label-name">
            <span className="content-name"> Preço: </span>
          </label>
        </div>
        <div className="form-expense__control">
          <label className="label-name">Data:</label>
          <input type="date" value={date} onChange={dateChangeHandler} />
        </div>
        <div className="form-expense__control action">
          <button className="form-expense__controls--action">Adicionar</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
