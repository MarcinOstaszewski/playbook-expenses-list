import React from 'react';
import './App.css';
import Header from './components/Header';
import AddTransaction from './components/AddTransaction';
import TransactionsTable from './components/TransactionsTable';
import Sum from './components/Sum';


function App() {
  return (
    <div className="App">

      <Header />

      <AddTransaction />

      <TransactionsTable />

      <Sum />

    </div>
  );
}

export default App;
