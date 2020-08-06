import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';
import AddForm from './components/AddForm';
import './App.css';

import { GlobalState } from './context/GlobalState';

function App() {
  return (
    <GlobalState>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <History />
        <AddForm />
      </div>
    </GlobalState>
  );
}

export default App;
