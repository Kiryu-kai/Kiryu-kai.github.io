import React from 'react';
import { use100vh } from 'react-div-100vh'
import styles from './Container.module.scss';
import cursor from '../image/cursor.png';

function Container({ children }: { children: React.ReactNode }) {
  const vh100 = '100vh';

  return (
    <div style={{
      minHeight: use100vh() || vh100,
      cursor: `url(${cursor}), auto`
    }} className={styles.container}>{children}</div>
  );
}

export default Container;
