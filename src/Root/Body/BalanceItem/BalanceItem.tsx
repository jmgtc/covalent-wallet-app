import React from 'react';
import { Contract } from '../Body';
import styles from './BalanceItem.module.scss';
import { Card, Elevation, Tooltip } from '@blueprintjs/core';
import { Loan } from './Loan/Loan';

export const BalanceItem: React.FC<{ item: Contract; loans: any }> = ({
  item,
  loans,
}) => {
  const quoteMajor = Math.floor(item.quote);
  const quoteMinor = (item.quote - quoteMajor).toFixed(18).substring(1);

  const TooltipContent = <div>{item.contract_name}</div>;

  const aave =
    loans &&
    loans[item.contract_ticker_symbol] &&
    loans[item.contract_ticker_symbol].aave;
  const comp =
    loans &&
    loans[item.contract_ticker_symbol] &&
    loans[item.contract_ticker_symbol].comp;

  // console.log(aave, comp);
  return (
    <Card className={styles.root} elevation={Elevation.ZERO}>
      <div className={styles.top}>
        <div className={styles.balanceDesc}>
          <Tooltip className={styles.tooltip} content={TooltipContent}>
            <div className={styles.balance}>
              <div className={styles.logo}>
                <img
                  className={styles.logoImg}
                  src={item.logo_url}
                  alt={item.contract_name}
                  width={36}
                  height={36}
                />
              </div>
              <div className={styles.symbol} title={item.contract_name}>
                {item.contract_ticker_symbol}
              </div>
            </div>
          </Tooltip>
        </div>
        <div className={styles.loans}>
          {aave && <Loan provider={aave} providerName="aave" />}
          {comp && <Loan provider={comp} providerName="comp" />}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.quote}>
          <span className={styles.quoteMajor}>{quoteMajor}</span>
          <span className={styles.quoteMinor}>{quoteMinor}</span>
        </div>
        <div className={styles.fiat}>~${item.quote_rate}</div>
      </div>
    </Card>
  );
};
