import React, { useState } from 'react';
import styles from './Body.module.scss';
import { BalanceItem } from './BalanceItem/BalanceItem';
import { AddressInput } from './AddressInput/AddressInput';
import { AccountEditOverlay } from './AccountEditOverlay/AccountEditOverlay';
import { CompoundAsset, getCompoundAssets } from '../../api/getCompoundAssets';
import { useAsync } from 'react-use';
import { AaveAsset, getAaveAssets } from '../../api/getAaveAssets';
import { merge } from 'lodash';

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

const groupByTickerSymbol = (
  assets: AaveAsset[] | CompoundAsset[],
  networkName: string,
  tokenName: string,
) => {
  return (assets as any).reduce(
    (out: any, asset: AaveAsset | CompoundAsset) => {
      const { underlying, ...loan } = asset;
      return {
        ...out,
        [asset.underlying.contract_ticker_symbol]: {
          underlying,
          [networkName]: {
            ...loan,
            token: (loan as any)[tokenName],
          },
        },
      };
    },
    {},
  );
};

const mergeAssets = (
  aaveAssets: AaveAsset[],
  compoundAssets: CompoundAsset[],
) => {
  const aaveMap = groupByTickerSymbol(aaveAssets, 'aave', 'atoken');
  const compoundMap = groupByTickerSymbol(compoundAssets, 'comp', 'ctoken');

  console.log(aaveMap, compoundMap);
  return merge(aaveMap, compoundMap);
};

const BodyContent: React.FC<{
  balances: Balances;
  showOverlay: () => void;
}> = ({ balances, showOverlay }) => {
  const compoundAssets = useAsync(async () => {
    const result = await getCompoundAssets();
    // console.log(result);
    if (result.status >= 200 && result.status < 300) {
      return result.data.data.items;
    } else {
      // setFetchError(result);
    }
  }, []);
  const aaveAssets = useAsync(async () => {
    const result = await getAaveAssets();
    // console.log(result);
    if (result.status >= 200 && result.status < 300) {
      return result.data.data.items;
    } else {
      // setFetchError(result);
    }
  }, []);

  const loans =
    aaveAssets.value &&
    compoundAssets.value &&
    mergeAssets(aaveAssets.value, compoundAssets.value);
  console.log(balances, loans);

  return (
    <div className={styles.wrapper}>
      <AddressInput address={balances.address} showOverlay={showOverlay} />
      <div className={styles.balanceItems}>
        {balances.items.map((item: Contract) => (
          <BalanceItem item={item} loans={loans} key={item.contract_address} />
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
