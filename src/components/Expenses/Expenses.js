import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = ({ opts, onYearChange, selectedYear, items }) => {
  return (
    <Card className="expenses">
      <ExpensesFilter
        opts={opts}
        selected={selectedYear}
        onYearChange={onYearChange}
      />
      
      <ExpensesList items={items} />
    </Card>
  );
};

export default Expenses;
