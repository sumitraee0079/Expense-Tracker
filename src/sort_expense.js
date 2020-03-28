import React, { useState, useEffect } from 'react';
import './App.css';

const amounts = [
  {
    title: "Mobile",
    description: 'Samsung',
    price: 10000,
    date: 2016,
  },
  {
    title: "Pen",
    description: 'Parker',
    price: 1000,
    date: 2020,
  },
  {
    title: "Laptop",
    description: 'Lenovo',
    price: 50000,
    date: 2018,
  },
];

function SortExpense() {  
const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('albums');

  useEffect(() => {
    const sortArray = type => {
      const types = {
        price: 'price',
        date: 'date',
      };
      const sortProperty = types[type];
      const sorted = [...amounts].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]); 

  return (
    <div className="App">
      <select onChange={(e) => setSortType(e.target.value)}> 
        <option value="price">Prices</option>
        <option value="date">Date</option>
      </select>

      {data.map(amount => (
        <div key={amount.title} style={{ margin: '30px' }}>
          <div>{`Title: ${amount.title}`}</div>
          <div>{`Description: ${amount.description}`}</div>
          <div>{`Price: ${amount.price}`}</div>
          <div>{`Date: ${amount.date}`}</div>
        </div>
      ))}
    </div>
  );
}

export default SortExpense;
