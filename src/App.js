import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

import expenses from "./data";

const App = () => {
  const [initialExpense, setExpenses] = useState(expenses);
  const saveExpenseHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };

    setExpenses((prevState) => {
      return [newExpenseData, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={saveExpenseHandler} />
      <Expenses items={initialExpense} />
    </div>
  );
};

export default App;
