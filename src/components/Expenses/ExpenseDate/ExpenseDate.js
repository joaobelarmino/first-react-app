import React from 'react';
import Card from '../../UI/Card/Card';
import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const day = props.date.toLocaleString("pt-BR", { day: "2-digit" });
  const month = props.date.toLocaleString("pt-BR", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <Card className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </Card>
  );
}

export default ExpenseDate;
