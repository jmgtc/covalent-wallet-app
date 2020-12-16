import { Card, Elevation } from '@blueprintjs/core';
import React from 'react';
import { Body } from './Body/Body';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import styles from './Root.module.scss';

export const Root: React.FC = () => {
  return (
    <Card className={styles.root} elevation={Elevation.TWO}>
      <Header />
      <Body />
      <Footer />
    </Card>
  );
};
