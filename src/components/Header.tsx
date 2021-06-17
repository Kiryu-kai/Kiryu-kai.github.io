import React from 'react';
import GlobalNav from './GlobalNav';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.wrap}>
      <GlobalNav />
    </header>
  );
}

export default Header;
