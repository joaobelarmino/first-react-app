import React, { useState } from 'react';
import ExpenseGroup from "./components/Expenses/ExpenseGroup/ExpenseGroup";
import NewExpense from './components/NewExpense/NewExpense/NewExpense';

const reg_expenses = [
  {
    id: 1,
    title: 'Livro',
    amount: 75.5,
    date: new Date(2020, 2, 20)
  },
  {
    id: 2,
    title: 'Livro dois',
    amount: 25.1,
    date: new Date(2022, 2, 20)
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(reg_expenses);

  const addExpenseHandler = (newExpense) => {
    setExpenses(prevExpenses => {
      return [newExpense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseGroup expense={expenses}/>
    </div>
  );
}

export default App;
