import React, {useState} from 'react';
import { NewIcon } from './NewIcon'
import { TextWrap } from './TextWrap'
import styles from './GlobalNav.module.scss';

function GlobalNav() {
  const [isExpanded, toggleExpanded] = useState<'true' | 'false'>('false');
  /** グロナビと展開させるためのボタン用ハンドラ */
  const onClick = () => {
    toggleExpanded(isExpanded === 'true' ? 'false' : 'true');
  };
  const internal = [
    [
      'あさココLIVEジェネレーター',
      '/asacoco-gen/',
    ],
    [
      '#桐生ココの格言',
      '/aphorism/',
    ],
    [
      '#桐生会半永久的継続契約書',
      '/semi-permanent-contract/',
    ],
    [
      '桐生会から桐生会へ',
      '/for-kiryu-kai/',
    ],
  ];
  const extarnal: [string | JSX.Element, string][] = [
    [
      'Thank You Coco',
      'https://arigathanks.manotomo.com/home',
    ],
    [
      'fxcxbookcom',
      'https://fxcxbook.com',
    ],
    [
      'あさココ温泉郷',
      'https://asacoco-hot-spring.com',
    ],
    [
      'あさココ温泉郷',
      'https://holosite.me/aco/',
    ],
    [
      (
        <>
          桐生会特設サイト - <TextWrap>たつのこセレクション</TextWrap>
        </>
      ),
      'https://kiryucoco.jp/ts/',
    ],
  ];

  return (
    <nav className={styles.wrap}>
      <button type="button" className={styles.btn} onClick={onClick} aria-expanded={isExpanded}>
        <span className={styles.btn__label}>Menu</span>
      </button>

      <div className={styles.nav} hidden={isExpanded === 'false'}>
        <div className={styles.nav__inner}>
          <div className={styles.nav__scroll}>
            <ul className={styles.nav__ul}>
              {
                internal.map(([title, href]) => (
                  <li className={styles.nav__li} key={href}>
                    <a href={href} className={styles.nav__a}>
                      <span className={styles.nav__title}>
                        {title}
                      </span>
                    </a>
                  </li>
                ))
              }
            </ul>

            <h2 className={styles.nav__hdg}>外部サイト</h2>

            <ul className={styles.nav__ul}>
              {
                extarnal.sort((a, b) => {
                  const t = typeof a[0] === 'string' ? a[0] : a[0].props.children[0];

                  if (t > b[1]) {
                    return 1;
                  }

                  if (t < b[1]) {
                    return -1;
                  }

                  return 0;
                }).map(([title, href]) => (
                  <li className={styles.nav__li} key={href.toString()}>
                    <a href={href} className={styles.nav__a} target="_blank" rel="noreferrer">
                      <span className={styles.nav__title}>
                        {title}
                        <NewIcon />
                      </span>
                      <span className={styles.nav__url}>
                        {href}
                      </span>
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default GlobalNav;
