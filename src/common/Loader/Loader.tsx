import { Intent } from '@blueprintjs/core/lib/esm/common/intent';
import { Spinner } from '@blueprintjs/core/lib/esm/components/spinner/spinner';
import React from 'react';
import styles from './Loader.module.scss';

export const Loader: React.FC = () => {
  return (
    <div className={styles.root}>
      <Spinner intent={Intent.PRIMARY} size={50} />
    </div>
  );
};
