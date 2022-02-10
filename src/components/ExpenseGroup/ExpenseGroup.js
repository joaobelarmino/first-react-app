import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './ExpenseGroup.css';

function ExpenseGroup(props) {


  return (
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
    );
}

export default ExpenseGroup;