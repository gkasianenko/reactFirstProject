import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter.js";
import ExpensesList from "./ExpensesList.js";
import "./Expenses.css";
import Card from ".././UI/Card.js";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const saveSelectedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <Card className="expenses">
      <ExpenseFilter
        onSaveYearData={saveSelectedYearHandler}
        filteredYear={filteredYear}
      />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
