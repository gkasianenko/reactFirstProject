import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm.js";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const showForm = () => {
    setIsEditing(true);
  };

  const closeForm = () => {
    setIsEditing(false);
  };

 
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={showForm}>Добавить в расходы</button>}
     {isEditing && <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onSubmitted={closeForm}
        />
      </div>} 
    </div>
  );
};

export default NewExpense;
