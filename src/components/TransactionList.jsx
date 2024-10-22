import React from 'react';

const TransactionList = ({ transactions, editTransaction, deleteTransaction }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Transactions</h2>
      <ul className="bg-white p-4 rounded shadow-md">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="mb-4 border-b border-gray-200 pb-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-700">{transaction.date} - {transaction.category} - {transaction.description} - ${transaction.amount} ({transaction.type})</p>
              </div>
              <div>
                <button onClick={() => deleteTransaction(transaction.id)} className="bg-red-500 text-white px-2 py-1 rounded mr-2">Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
