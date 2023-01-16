import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

import expenses from "./data";

const App = () => {
  const filteredYear = [...new Set(expenses.map((e) => e.date.getFullYear()))];
  filteredYear.sort((a, b) => b - a);
  const [selectedYear, setSelectedYear] = useState(filteredYear[0]);
  const filterExpenses = expenses.filter(
    (exp) => exp.date.getFullYear() === parseInt(selectedYear)
  );

  const onYearChange = (year) => {
    setSelectedYear(year);
    const filterExp = expenses.filter(
      (exp) => exp.date.getFullYear() === parseInt(year)
    );
    setExpenses(filterExp);
  };

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
      <Expenses
        opts={filteredYear}
        onYearChange={onYearChange}
        selectedYear={selectedYear}
        items={filterExpenses}
      />
    </div>
  );
};

export default App;
