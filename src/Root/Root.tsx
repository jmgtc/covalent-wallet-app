import React from 'react';
import { Body } from './Body/Body';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import styles from './Root.module.scss';

export const Root: React.FC = () => {
  return (
    <div className={styles.root}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
