import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const balance = transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, items) => (acc += items), 0)
    .toFixed(2);

  return (
    <Fragment>
      <h4>Your Balance</h4>
      <h1 id='balance'>${balance}</h1>
    </Fragment>
  );
};

export default Balance;
