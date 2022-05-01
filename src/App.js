import { useState } from "react";
import Expenses from "./components/Expenses/Expenses.js";

import NewExpense from "./components/NewExpense/NewExpense.js";

const data = [
  {
    id: "e1",
    title: "Сникерсы",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Запчасти",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Страховка",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Моб. связь",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(data);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

 

  return (
    <div>
      <h2>Мой список</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}  />
    </div>
  );
}

export default App;
