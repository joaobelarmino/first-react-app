import React, {useState} from 'react';
import Card from '../../UI/Card/Card';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {

  const [shouldShow, setShouldShow] = useState(false);

  const showForm = () => {
    setShouldShow(true);
  }

  const hideForm = () => {
    setShouldShow(false);
  }

  const saveNewExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    hideForm();
    props.onAddExpense(expenseData);
  }

  return (
    <Card className="new-expense">
      {shouldShow ? (
        <ExpenseForm onSaveNewExpense={saveNewExpenseHandler} onCancel={hideForm} />
      ) : (
        <div className="new-expense-field">
          <button type="button" className="form-expense__controls--action" onClick={showForm}>Adicionar nova despesa</button>
        </div>
        )
      }
    </Card>
  );
}

export default NewExpense;
