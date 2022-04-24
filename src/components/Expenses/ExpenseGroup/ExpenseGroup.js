import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import EmptySpace from "../EmptySpace/EmptySpace";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";
import "./ExpenseGroup.css";

const ExpenseGroup = (props) => {
  const [filteredYear, setFilteredYear] = useState('');

  const addFilterHandler = (targetFilter) => {
    setFilteredYear(targetFilter);
  };

  const filteredExpenses = props.expense.filter(item => {
    if(filteredYear === '') {
      return props.expense;
    }
    return item.date.getFullYear().toString() === filteredYear;
  })

  return (
    <>
      <Card className="expenses">
        <div className="container-content">
          {props.expense === "" ? (
            <EmptySpace />
          ) : (
            <>
              <ExpensesFilter
                selected={filteredYear}
                onFilter={addFilterHandler}
              />
              <ExpensesChart expense={filteredExpenses}/>
              <ExpenseList expenses={filteredExpenses} />
            </>
          )}
        </div>
      </Card>
    </>
  );
};

export default ExpenseGroup;
