import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ items }) => {
  if (items.length === 0)
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;

  return (
    <ul className="expenses-list">
      {items.map((exp) => (
        <ExpenseItem
          key={exp.id}
          id={exp.id}
          date={exp.date}
          title={exp.title}
          amount={exp.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
