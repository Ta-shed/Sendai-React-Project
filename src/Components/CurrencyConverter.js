import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(
        'https://api.currencyfreaks.com/v2.0/rates/latest?apikey=e2385a97f6914984a372bc7a36fc7b91'
      );

      if (response.ok) {
        const data = await response.json();
        const conversionRate = data.rates[toCurrency];
        const convertedValue = conversionRate ? amount * conversionRate : '';
        setConvertedAmount(convertedValue);
      } else {
        console.error('Currency conversion failed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fromCurrency" className="text-lg font-medium">
            From:
          </label>
          <input
            type="text"
            id="fromCurrency"
            className="border border-gray-300 px-4 py-2 rounded w-full"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="toCurrency" className="text-lg font-medium">
            To:
          </label>
          <input
            type="text"
            id="toCurrency"
            className="border border-gray-300 px-4 py-2 rounded w-full"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="text-lg font-medium">
            Amount:
          </label>
          <input
            type="text"
            id="amount"
            className="border border-gray-300 px-4 py-2 rounded w-full"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Convert
        </button>
      </form>
      {convertedAmount && (
        <p className="mt-4">
          Converted Amount: {convertedAmount} {toCurrency}
        </p>
      )}
    </div>
  );
};

export default CurrencyConverter;
