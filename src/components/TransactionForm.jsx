import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [formData, setFormData] = useState({
    type: 'income',
    amount: '',
    category: '',
    date: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      ...formData,
      amount: parseFloat(formData.amount)
    };
    addTransaction(newTransaction);
    setFormData({
      type: 'income',
      amount: '',
      category: '',
      date: '',
      description: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Type:</label>
        <select name="type" value={formData.type} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Amount:</label>
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category:</label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description:</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
