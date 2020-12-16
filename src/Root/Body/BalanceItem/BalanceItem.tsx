import React from 'react';
import { Contract } from '../Body';
import styles from './BalanceItem.module.scss';
import { Card, Elevation, Tooltip } from '@blueprintjs/core';

export const BalanceItem: React.FC<{ item: Contract }> = ({ item }) => {
  const quoteMajor = Math.floor(item.quote);
  const quoteMinor = (item.quote - quoteMajor).toFixed(18).substring(1);

  const TooltipContent = <div>{item.contract_name}</div>;

  return (
    <Card className={styles.root} elevation={Elevation.ZERO}>
      <div className={styles.balanceInfo}>
        <Tooltip className={styles.tooltip} content={TooltipContent}>
          <div className={styles.balance}>
            <div className={styles.logo}>
              <img
                className={styles.logoImg}
                src={item.logo_url}
                alt={item.contract_name}
              />
            </div>
            <div className={styles.symbol} title={item.contract_name}>
              {item.contract_ticker_symbol}
            </div>
          </div>
        </Tooltip>
        <div className={styles.quote}>
          <span className={styles.quoteMajor}>{quoteMajor}</span>
          <span className={styles.quoteMinor}>{quoteMinor}</span>
        </div>
        <div className={styles.fiat}>~${item.quote_rate}</div>
      </div>
    </Card>
  );
};
