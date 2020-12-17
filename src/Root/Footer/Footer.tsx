import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/images/covalent-logo.png';

export const Footer: React.FC = () => {
  return (
    <div className={styles.root}>
      <a
        className={styles.link}
        href="https://www.covalenthq.com/"
        target="_blank"
        rel="noreferrer"
      >
        <span>Powered by</span>
        <img className={styles.logoImg} src={logo} alt="Covalent" />
      </a>
    </div>
  );
};
