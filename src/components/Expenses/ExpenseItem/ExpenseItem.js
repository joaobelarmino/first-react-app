import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";

const ExpenseItem = (props) => {
  let [ title, setTitle ] = useState(props.title);

  const changeTitleHandler = () => {
    setTitle('Testando')
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <Card className="expense-item__price">R${props.amount}</Card>
      </div>
      <button onClick={changeTitleHandler}>Edit</button>
    </Card>
  );
};

export default ExpenseItem;
