import React, {useState, useEffect} from 'react';
import styles from './LastDate.module.scss';

/**
 * * 4で割り切れる年はうるう年
 * * 100で割り切れて、400で割り切れない年はうるう年ではない
 * @param num - 年数
 * @returns - うるう年かどうか
 */
const isLeapYeah = (num: number) => (
  num % 4 === 0 &&
  !(
    num % 100 === 0 &&
    num % 400 !== 0
  )
);

function LastDate() {
  const [label, setLabel] = useState('約束の日まであと、');
  const [y, setYear] = useState('');
  const [d, setDay] = useState('');
  const [h, setHour] = useState('');
  const [m, setMin] = useState('');
  const [s, setSec] = useState('');
  /** 会長のお戻り 2021年7月1日17時59分にBoothが終了したことから。 */
  const end = new Date(2521, 6, 1, 18, 0, 0, 0);
  const endYear = end.getFullYear();
  const endTimestamp = end.getTime();
  /** カウントダウン */
  const loop = () => {
    const now = new Date();
    const nowYeah = now.getFullYear();
    let diff = endTimestamp - now.getTime();

    {
      let leapDay = 0;
      const max = end.getFullYear() - nowYeah;

      for (let i = 0; i < max; i++) {
        if (isLeapYeah(endYear - i)) {
          leapDay++;
        }
      }

      diff -= leapDay * 24 * 60 * 60 * 1000;
    }

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

      setYear(year ? `${year}年` : '')
      setDay(day ? `${day}日` : '')
      setHour(hour ? `${String(hour).padStart(2, '0')}時間` : '')
      setMin(min ? `${String(min).padStart(2, '0')}分` : '')
      setSec(`${sec}秒。`)

      return;
    }

    // 500年後
    setYear('');
    setDay('');
    setHour('');
    setMin('');
    setSec('');
    setLabel('約束の時は来た。')
    clearInterval(key);
  };
  const key = setInterval(loop, 1000);

  useEffect(loop);

  // 自動翻訳ユーザは更新される文字列ごとにElement Nodeが別れているほうが助かるので
  // それぞれをspan要素で分割します
  return (
    <p>
      <span>{label}</span>
      <span className={styles.lastDate}>
        <span>{y}</span>
        <span>{d}</span>
        <span>{h}</span>
        <span>{m}</span>
        <span>{s}</span>
      </span>
    </p>
  );
}

export default LastDate;
