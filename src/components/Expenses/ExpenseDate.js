import "./ExpenseDate.css";

function ExprenseDate(props) {
  const month = props.date.toLocaleString("ru", { month: "long" });
  const day = props.date.toLocaleString("ru", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExprenseDate;
