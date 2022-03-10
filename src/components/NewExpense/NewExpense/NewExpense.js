import React from 'react';
import Card from '../../UI/Card/Card';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {

  const saveNewExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  return (
    <Card className="new-expense">
      <ExpenseForm onSaveNewExpense={saveNewExpenseHandler} />
    </Card>
  );
}

export default NewExpense;