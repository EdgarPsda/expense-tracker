import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

export const Expenses = ({ expenses }) => {
  const [enteredFilter, setEnteredFilter] = useState("2020");

  const onFilterHandler = (filter) => {
    setEnteredFilter(filter);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredFilter;
  });

  return (
    <div>
      <ExpensesFilter
        selected={enteredFilter}
        filterHandler={onFilterHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
};
