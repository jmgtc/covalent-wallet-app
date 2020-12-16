import { Button, Icon, Intent } from '@blueprintjs/core';
import React from 'react';
import styles from './AddressInput.module.scss';

export const AddressInput: React.FC<{
  address: string;
  showOverlay: () => void;
}> = ({ address, showOverlay }) => {
  const truncatedAddress = address.slice(0, 6) + '...' + address.slice(-4);
  return (
    <div className={styles.root} onClick={showOverlay}>
      <div className={styles.address}>{truncatedAddress}</div>
      <Button className={styles.editButton} minimal type="button">
        <Icon icon="edit" intent={Intent.PRIMARY} />
      </Button>
    </div>
  );
};
