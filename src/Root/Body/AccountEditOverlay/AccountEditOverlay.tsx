import React, { useEffect, useState } from 'react';
import styles from './AccountEditOverlay.module.scss';
import { getAddressBalance } from '../../../api/getAddressBalance';
import { Loader } from '../../../common/Loader/Loader';
import { AddressForm } from './AddressForm/AddressForm';
import { useStateAndStorage } from '../../../hooks/useStateAndLocalStorage';
import { NonIdealState } from '@blueprintjs/core/lib/esm/components/non-ideal-state/nonIdealState';
import { Button } from '@blueprintjs/core/lib/esm/components/button/buttons';
import { useAsyncFn } from 'react-use';
import { FormData } from './AddressForm/AddressForm';
import { Balances } from '../Body';
import { Header } from '../../Header/Header';

export const AccountEditOverlay: React.FC<{
  setBalances: (balances: any) => void;
  hideOverlay: () => void;
  balances: Balances;
}> = ({ setBalances, hideOverlay, balances }) => {
  const [address, setAddress] = useStateAndStorage('address', '');
  const [fetchError, setFetchError] = useState('');
  // console.log('address', address);

  const [state, fetch] = useAsyncFn(async (checkedAddress: string) => {
    const result = await getAddressBalance(checkedAddress);
    // console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setBalances(result.data.data);
      hideOverlay();
      setAddress(result.data.data.address);
    } else {
      setFetchError(result);
    }
  }, []);

  useEffect(() => {
    if (address) {
      fetch(address);
    }
  }, [address, fetch]);

  const onSubmit = async (data: FormData) => {
    fetch(data.address);
  };

  const onCancel = () => {
    hideOverlay();
    setAddress(balances.address);
  };

  // console.log('balances', balances);
  return (
    <div className={styles.root}>
      <Header />
      {state.loading ? (
        <Loader />
      ) : fetchError ? (
        <NonIdealState
          icon="error"
          title="Address fetching error"
          description={fetchError}
          action={
            <Button onClick={() => setFetchError('')}>Return to form</Button>
          }
        />
      ) : (
        <div className={styles.container}>
          <AddressForm
            address={address}
            onSubmit={onSubmit}
            onCancel={onCancel}
            isCancelable={Boolean(balances && balances.address)}
          />
        </div>
      )}
    </div>
  );
};
