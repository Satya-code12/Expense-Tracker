import React from 'react';

const Summary = ({ summary }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-2">Summary</h2>
      <p className="text-gray-700">Total Income: ₹{summary.income}</p>
      <p className="text-gray-700">Total Expense: ₹{summary.expense}</p>
      <p className="text-gray-700">Balance: ₹{summary.balance}</p>
    </div>
  );
};

export default Summary;
