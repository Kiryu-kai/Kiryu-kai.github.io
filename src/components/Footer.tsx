import React, {useState, useEffect} from 'react';
import styles from './Footer.module.scss';

function Footer() {
  const [isExpanded, setExpanded] = useState(false);
  const onclick: React.MouseEventHandler = function (e) {
    e.stopPropagation()
    setExpanded(!isExpanded);
  };
  const stopPropagetion = (e: React.MouseEvent) => e.stopPropagation();

  useEffect(() => {
    window.addEventListener('click', e => {
      if (isExpanded) {
        setExpanded(!isExpanded);
      }
    });
  });

  return (
    <footer className={styles.wrap}>
      <p className={styles.copyright}>
        <small>©︎ 2019 Coco Kiryu - <button type="button" className={styles.btn} onClick={onclick}　aria-expanded={isExpanded}>Materials</button> - <a href="https://github.com/Kiryu-kai/Kiryu-kai.github.io">Repository</a></small>
      </p>

      <div className={styles.material} hidden={!isExpanded}>
        <div className={styles.material__inner} onClick={stopPropagetion}>
          <h2 className={styles.material__hdg}>Materials</h2>

          <p className={styles.material__p}>
            The collaborators are different for each directory.
          </p>

          <p className={styles.material__p}>
            This top page is supported by the following works.
          </p>

          <ul className={styles.material__ul}>
            <li className={styles.material__li}>
              <a href="https://twitter.com/kiryucoco/status/1218277670040956928">桐生ココ🐉 (@kiryucoco) - Twitter</a>
            </li>
            <li className={styles.material__li}>
              <a href="https://twitter.com/buff47213168/status/1360166763317526532">buff🐉 (@buff47213168) - Twitter</a>
            </li>
            <li className={styles.material__li}>
              <a href="https://commons.nicovideo.jp/material/nc176637">nc176637 - ニコニ・コモンズ</a>
            </li>
            <li className={styles.material__li}>
              <a href="https://icooon-mono.com/12229-%E6%96%B0%E3%81%97%E3%81%84%E3%82%A6%E3%82%A3%E3%83%B3%E3%83%89%E3%82%A6%E3%81%A7%E9%96%8B%E3%81%8F%E3%83%9C%E3%82%BF%E3%83%B3-1/">新しいウィンドウで開くボタン　1 - ICOOON MONO</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
