import React from 'react';
import styles from './Body.module.scss';
import { useAsyncFn } from 'react-use';
import { getAddressBalance } from '../../api/getAddressBalance';
import { BalanceItem } from './BalanceItem/BalanceItem';
import { Intent, Spinner } from '@blueprintjs/core';
import { Loader } from '../../common/Loader/Loader';

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

export const Body: React.FC = () => {
  const address = '0xb392b1b6ab28016a019bae72f6cb7b18145b219e';
  const [state, fetch] = useAsyncFn(async () => {
    const result = await getAddressBalance(address);
    console.log(result.data.data);
    return result.data.data;
  }, [address]);

  return (
    <div className={styles.root}>
      {state.loading && <Loader />}
      {!state.loading && state.error && <div>Error</div>}
      {/* {state.value && JSON.stringify(state.value)} */}
      {!state.loading &&
        !state.error &&
        state.value &&
        state.value.items.map((item: Contract) => (
          <BalanceItem item={item} key={item.contract_address} />
        ))}
      Covallet
      <button onClick={fetch}>get balance</button>
    </div>
  );
};
