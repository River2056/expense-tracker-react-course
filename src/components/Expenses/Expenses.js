import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = ({ items }) => {
  const currentYear = new Date().getFullYear().toString();
  const [dropdownYear, setDropdownYear] = useState(currentYear);
  const onYearChange = (year) => {
    setDropdownYear(year);
    console.log(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={dropdownYear} onYearChange={onYearChange} />
      {items.map((exp) => (
        <ExpenseItem
          key={exp.id}
          id={exp.id}
          date={exp.date}
          title={exp.title}
          amount={exp.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;
