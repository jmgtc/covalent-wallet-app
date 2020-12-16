import { Tooltip } from '@blueprintjs/core';
import React from 'react';
import styles from './Loan.module.scss';

const format = (value: number) => {
  return (value * 100).toFixed(2) + '%';
};

const display = (supply: number, borrow: number) => {
  return (
    <span className={styles.display}>
      <Tooltip content={<div>Supply</div>}>{format(supply)}</Tooltip>
      <span className={styles.divider}>/</span>
      <Tooltip content={<div>Borrow</div>}>{format(borrow)}</Tooltip>
    </span>
  );
};

export const Loan: React.FC<{ provider: any; providerName: string }> = ({
  provider,
  providerName,
}) => {
  const providerAppUrl =
    provider === 'aave'
      ? 'https://app.aave.com/'
      : 'https://app.compound.finance/';
  return (
    <a
      className={styles.root}
      href={providerAppUrl}
      target="_blank"
      rel="noreferrer"
    >
      <Tooltip className={styles.logo} content={provider.token.contract_name}>
        <img
          className={styles.logoImg}
          src={provider.token.logo_url}
          alt={provider.token.contract_name}
        />
      </Tooltip>
      {providerName === 'aave'
        ? display(provider.supply_apy, provider.stable_borrow_apr)
        : display(provider.supply_apr, provider.borrow_apr)}
    </a>
  );
};
