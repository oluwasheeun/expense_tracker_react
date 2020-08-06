import React, { Fragment, useContext } from 'react';
import HistoryItems from './HistoryItems';
import { GlobalContext } from '../context/GlobalState';

const History = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <Fragment>
      <h3>History</h3>
      <ul id='list' className='list'>
        {transactions.map((transaction) => (
          <HistoryItems key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </Fragment>
  );
};

export default History;
