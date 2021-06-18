import React, {useState} from 'react';
import styles from './Main.module.scss';
import BackgroundVideo from './BackgroundVideo';
import TextWrap from './TextWrap';
import LastDate from './LastDate';

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
          <img className={styles.h1__logo} src="./image/logo.png" data-state={loadState} onLoad={logoOnLoad} alt="" width={900} height={900} draggable={false} />
        </span>

        <span className={styles.h1__txt}>
          ホロライブ直系 桐生会
        </span>
      </h1>

      <p>指定暴力団ホ口ライブ直参、<TextWrap>伝説のげぼかわドラゴン率いる桐生会。</TextWrap></p>
      <p>直系組織100団体、<TextWrap>構成員127万人。</TextWrap></p>
      <p>4代目会長・桐生ココを永遠に語り継ぎ、<TextWrap>推し続けることが我らたつのこの指名。</TextWrap></p>
      <p>500年の時を経て、<TextWrap>再びその名を世界に轟かせむ。</TextWrap></p>
      <LastDate />

      <BackgroundVideo />
    </main>
  );
}

export default Main;
