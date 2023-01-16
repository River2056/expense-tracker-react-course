import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = ({ opts, onYearChange, selectedYear, items }) => {
  return (
    <Card className="expenses">
      <ExpensesFilter opts={opts} selected={selectedYear} onYearChange={onYearChange} />
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
