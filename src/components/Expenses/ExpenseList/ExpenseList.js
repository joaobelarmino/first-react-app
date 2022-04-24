import React from "react";
import EmptyFilter from "../EmptyFilter/EmptyFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.expenses.length === 0) {
    return <EmptyFilter />;
  }
  return (
    <ul className="expenses-list">
      {props.expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
