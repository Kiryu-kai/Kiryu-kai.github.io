import React from 'react';
import { use100vh } from 'react-div-100vh'
import styles from './Container.module.scss';

function Container({ children }: { children: React.ReactNode }) {
  const vh100 = '100vh';

  return (
    <div style={{ minHeight: use100vh() || vh100 }} className={styles.container}>{children}</div>
  );
}

export default Container;
