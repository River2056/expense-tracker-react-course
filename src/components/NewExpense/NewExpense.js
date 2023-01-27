import { useState } from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [popup, setPopup] = useState(false);

  const handleShowPopup = () => setPopup(true);
  const handleClosePopup = () => setPopup(false);

  if (!popup)
    return (
      <Card className="new-expense">
        <button onClick={handleShowPopup}>Add New Expense</button>
      </Card>
    );

  return (
    <Card className="new-expense">
      <ExpenseForm
        onSaveExpenseData={props.onAddExpense}
        onClosePopup={handleClosePopup}
      />
    </Card>
  );
};

export default NewExpense;
