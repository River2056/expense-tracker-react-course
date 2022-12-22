import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpenseData={props.onAddExpense} />
    </Card>
  );
};

export default NewExpense;
