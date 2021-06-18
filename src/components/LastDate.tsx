import React, {useState, useEffect} from 'react';
import styles from './LastDate.module.scss';

function LastDate() {
  const [label, setLabel] = useState('約束の日まであと、');
  const [lastDate, setLastDate] = useState('');
  /** 会長のお戻り 2021年7月1日17時59分にBoothが終了したことから。 */
  const endDate = new Date(2521, 6, 1, 18, 0, 0, 0).getTime();
  /** カウントダウン */
  const loop = () => {
    const now = Date.now();
    let diff = new Date(endDate - now).getTime();

    // 500年経ってない
    if (0 <= diff) {
      const year = Math.floor(diff / ( 1000 * 60 * 60 * 24 * 365 ));
      diff = diff % ( 1000 * 60 * 60 * 24 * 365 );
      const day = Math.floor(diff / ( 1000 * 60 * 60 * 24 ));
      diff = diff % ( 1000 * 60 * 60 * 24 );
      const hour = Math.floor(diff / ( 1000 * 60 * 60 ));
      diff = diff % ( 1000 * 60 * 60 );
      const min = Math.floor(diff / ( 1000 * 60 ))
      diff = diff % ( 1000 * 60 );
      const sec = String(Math.floor(diff / 1000)).padStart(2, '0');

      setLastDate(`${year ? `${year}年` : ''}${day ? `${day}日` : ''}${hour ? `${String(hour).padStart(2, '0')}時間` : ''}${min ? `${String(min).padStart(2, '0')}分` : ''}${sec}秒。`);

      return;
    }

    // 500年後
    setLastDate('');
    setLabel('約束の時は来た。')
    clearInterval(key);
  };
  const key = setInterval(loop, 1000);

  useEffect(loop);

  return (
    <p>
      {label}
      <span className={styles.lastDate}>{lastDate}</span>
    </p>
  );
}

export default LastDate;
