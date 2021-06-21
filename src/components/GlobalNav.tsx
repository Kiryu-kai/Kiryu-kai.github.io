import React, {useState} from 'react';
import styles from './GlobalNav.module.scss';

function GlobalNav() {
  const [isExpanded, toggleExpanded] = useState<'true' | 'false'>('false');
  /** グロナビと展開させるためのボタン用ハンドラ */
  const onClick = () => {
    toggleExpanded(isExpanded === 'true' ? 'false' : 'true');
  };

  return (
    <nav className={styles.wrap}>
      <button type="button" className={styles.btn} onClick={onClick} aria-expanded={isExpanded}>
        <span className={styles.btn__label}>Menu</span>
      </button>

      <div className={styles.nav} hidden={isExpanded === 'false'}>
        <div className={styles.nav__inner}>
          <div className={styles.nav__scroll}>
            <ul className={styles.nav__ul}>
              <li className={styles.nav__li}>
                <a href="/semi-permanent-contract/" className={styles.nav__item}>桐生会半永久的継続契約書</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default GlobalNav;
