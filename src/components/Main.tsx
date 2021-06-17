import React, {useState} from 'react';
import styles from './Main.module.scss';
import BackgroundVideo from './BackgroundVideo';

function Main() {
  const [loadState, setLoadState] = useState('wait');
  /** 代紋が読み込み終わった時にフェードインさせるためのハンドラ */
  const logoOnLoad = function () {
    setLoadState('loaded');
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>
        <span className={styles.h1__symbol}>
          <img className={styles.h1__logo} src="./image/logo.png" data-state={loadState} onLoad={logoOnLoad} alt="" width={900} height={900} />
        </span>

        <span className={styles.h1__txt}>
          ホロライブ直系 桐生会
        </span>
      </h1>

      <BackgroundVideo />
    </main>
  );
}

export default Main;
