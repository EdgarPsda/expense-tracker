import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Expenses/Expenses.css";
import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/Expenses/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "el1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  {
    id: "el2",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 7, 15),
  },
  { id: "el3", title: "New TV", amount: 799.49, date: new Date(2021, 2, 14) },
  {
    id: "el4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2019, 5, 14),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="expenses">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
