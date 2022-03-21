import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import EmptySpace from "../EmptySpace/EmptySpace";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import EmptyFilter from "../EmptyFilter/EmptyFilter";
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
        {props.expense == "" ? (
          <EmptySpace />
        ) : (
          <>
            <ExpensesFilter
              selected={filteredYear}
              onFilter={addFilterHandler}
            />
            {filteredExpenses.length === 0 ? (
              <EmptyFilter />
            )
            : (filteredExpenses.map((item) => (
                <ExpenseItem
                  key={item.id}
                  title={item.title}
                  amount={item.amount}
                  date={item.date}
                />
              )))}
          </>
        )}
      </Card>
    </>
  );
};

export default ExpenseGroup;
