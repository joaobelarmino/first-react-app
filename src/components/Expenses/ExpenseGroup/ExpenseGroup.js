import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import EmptySpace from "../EmptySpace/EmptySpace";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpenseGroup.css";

const ExpenseGroup = (props) => {
  const [filteredYear, setFilteredYear] = useState('');

  const addFilterHandler = (targetFilter) => {
    setFilteredYear(targetFilter);
  };

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
            {filteredYear == '' ? (
              props.expense.map((item) => (
                <ExpenseItem
                  key={item.id}
                  title={item.title}
                  amount={item.amount}
                  date={item.date}
                />
              ))) : (
              props.expense.map((item) =>
                item.date.getFullYear() == filteredYear ? (
                  <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                  />
                ) : ''
              ))}
          </>
        )}
      </Card>
    </>
  );
};

export default ExpenseGroup;
