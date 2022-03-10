import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpenseGroup.css";

const ExpenseGroup = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const addFilterHandler = (targetFilter) => {
    setFilteredYear(targetFilter);
  }

  return (
    <>
      <ExpensesFilter selected={filteredYear} onFilter={addFilterHandler} />
      <Card className="expenses">
        <ExpenseItem
          title={props.expense[0].title}
          amount={props.expense[0].amount}
          date={props.expense[0].date}
        />
        <ExpenseItem
          title={props.expense[1].title}
          amount={props.expense[1].amount}
          date={props.expense[1].date}
        />
        <ExpenseItem
          title={props.expense[2].title}
          amount={props.expense[2].amount}
          date={props.expense[2].date}
        />
      </Card>
    </>
  );
};

export default ExpenseGroup;
