
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Сникерсы",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "Запчасти", amount: 799.49, date: new Date(2021, 2, 12) },
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

  return (
    <div>
      <h2>Мой список</h2>
      <Expenses
      items={expenses}/>

      
    </div>
  );
}

export default App;
