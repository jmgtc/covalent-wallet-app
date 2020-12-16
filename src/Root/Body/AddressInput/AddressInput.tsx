import React from 'react';
import styles from './AddressInput.module.scss';

export const AddressInput: React.FC<{
  address: string;
  showOverlay: () => void;
}> = ({ address, showOverlay }) => {
  const truncatedAddress = address.slice(0, 6) + '...' + address.slice(-4);
  return (
    <div className={styles.root}>
      <div className={styles.address} onClick={showOverlay}>
        {truncatedAddress}
      </div>
      {/* <InputGroup disabled={true} value={truncatedAddress} />
      <Button minimal onClick={showOverlay}>
        <Icon icon="edit" intent={Intent.PRIMARY} />
      </Button> */}
    </div>
  );
};
