import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Steak Dinner',
    amount: 30.50,
    date: new Date(2021, 7, 14),
  },
  { id: 'e2', title: 'New Laptop', amount: 2199, date: new Date(2022, 9, 12) },
  {
    id: 'e3',
    title: 'Basketball Shoes',
    amount: 399,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Phone',
    amount: 1000,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
