import React, {useState, useEffect} from 'react';
import styles from './BackgroundVideo.module.scss';

function App() {
  const [loop, setLoop] = useState(false);
  const [loadState, setLoadState] = useState('wait');
  /** 動画が読み込み終わって自動再生が始まった時にフェードインさせるためのハンドラ */
  const onPlay = function () {
    setLoadState('loaded');
  };

  // ユーザが動きの効果を減らす設定にしている場合は、動画をループ再生させない
  useEffect(() => {
    const isNoReduce = !(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    setLoop(isNoReduce);
  }, []);

  return (
    <video className={styles.video} data-state={loadState} onPlay={onPlay} tabIndex={-1} autoPlay loop={loop} muted playsInline>
      <source src="./video/nc176637.mp4" type='video/mp4' />
    </video>
  );
}

export default App;
