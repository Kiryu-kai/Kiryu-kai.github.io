import React, {useState} from 'react';
import styles from './Main.module.scss';
import BackgroundVideo from './BackgroundVideo';

function Main() {
  const [loadState, setLoadState] = useState('wait');
  const logoOnLoad = function () {
    setLoadState('loaded');
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>
        <img className={styles.logo} src="./image/logo.png" data-state={loadState} onLoad={logoOnLoad} alt="桐生会" width={900} height={900} />
      </h1>

      <p className={styles.lede}>
        <b className={styles.lede__inner}>
          ホロライブ直系 桐生会
        </b>
      </p>

      <BackgroundVideo />
    </main>
  );
}

export default Main;
