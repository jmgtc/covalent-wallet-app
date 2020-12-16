import React from 'react';
import { Contract } from '../Body';
import styles from './BalanceItem.module.scss';
import { Card, Elevation } from '@blueprintjs/core';

export const BalanceItem: React.FC<{ item: Contract }> = ({ item }) => {
  return (
    <Card className={styles.root} elevation={Elevation.ZERO}>
      <div className={styles.balanceInfo}>
        <div className={styles.logo}>
          <img
            className={styles.logoImg}
            src={item.logo_url}
            alt={item.contract_name}
          />
        </div>
        <div title={item.contract_name}>{item.contract_ticker_symbol}</div>
        <div>{item.quote}</div>
        {/* <div>{item.quote_rate}</div> */}
      </div>
      {/* <div>{item.type}</div> */}
    </Card>
  );
};
