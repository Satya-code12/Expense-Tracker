import React, { useState, useEffect } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Summary from './components/Summary';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const App = () => {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('transactions');
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const editTransaction = (id, updatedTransaction) => {
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === id ? updatedTransaction : transaction
    );
    setTransactions(updatedTransactions);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  const calculateSummary = () => {
    const income = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
    const expense = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
    return {
      income,
      expense,
      balance: income - expense
    };
  };

  const summary = calculateSummary();

  const data = {
    labels: ['Income', 'Expense', 'Balance'],
    datasets: [
      {
        label: 'Current Month',
        data: [summary.income, summary.expense, summary.balance],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
      }
    ]
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Expense Tracker</h1>
      <TransactionForm addTransaction={addTransaction} />
      <Bar data={data} />
      <Summary summary={summary} />
      <TransactionList transactions={transactions} editTransaction={editTransaction} deleteTransaction={deleteTransaction} />
    </div>
  );
};

export default App;
