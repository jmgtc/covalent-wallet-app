import React, { useState } from 'react';
import styles from './Body.module.scss';
import { BalanceItem } from './BalanceItem/BalanceItem';
import { AddressInput } from './AddressInput/AddressInput';
import { AccountEditOverlay } from './AccountEditOverlay/AccountEditOverlay';

export type Balances = {
  address: string;
  items: Contract[];
};
export type Contract = {
  balance: string;
  contract_address: string;
  contract_decimals: number;
  contract_name: string;
  contract_ticker_symbol: string;
  logo_url: string;
  nft_data: any;
  quote: number;
  quote_rate: number;
  type: string;
};

const BodyContent: React.FC<{
  balances: Balances;
  showOverlay: () => void;
}> = ({ balances, showOverlay }) => {
  return (
    <div className={styles.wrapper}>
      <AddressInput address={balances.address} showOverlay={showOverlay} />
      <div className={styles.balanceItems}>
        {balances.items.map((item: Contract) => (
          <BalanceItem item={item} key={item.contract_address} />
        ))}
      </div>
    </div>
  );
};

export const Body: React.FC = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [balances, setBalances] = useState<any>();

  return (
    <div className={styles.root}>
      {balances && balances.items && (
        <BodyContent
          balances={balances}
          showOverlay={() => {
            setIsOverlayVisible(true);
          }}
        />
      )}
      <div style={{ display: isOverlayVisible ? 'block' : 'none' }}>
        <AccountEditOverlay
          setBalances={setBalances}
          balances={balances}
          hideOverlay={() => setIsOverlayVisible(false)}
        />
      </div>
    </div>
  );
};
