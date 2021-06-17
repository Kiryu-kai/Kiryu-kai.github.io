import React, {useState, useEffect} from 'react';
import styles from './Main.module.scss';

function App() {
  const [loop, setLoop] = useState(false);

  // ユーザが動きの効果を減らす設定にしている場合は、動画をループ再生させない
  useEffect(() => {
    const isNoReduce = !(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    setLoop(isNoReduce);
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>
        <img className={styles.logo} src="./image/logo.png" alt="桐生会" width={900} height={900} />
      </h1>

      <p className={styles.lede}>
        <b className={styles.lede__inner}>
          ホロライブ直系 桐生会
        </b>
      </p>

      <video className={styles.video} tabIndex={-1} autoPlay loop={loop} muted>
        <source src="./video/nc176637.mp4" type='video/mp4' />
      </video>
    </main>
  );
}

export default App;
