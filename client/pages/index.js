import styles from '../styles/Home.module.css';

import {Rubik} from 'next/font/google';

import { useEffect, useState } from 'react';

const rubik = Rubik({
  weight: '400',
  subsets: ['latin']
});

export default function Home() {

  useEffect(() => {
    function setup() {
      setInterval(() => {
        const image = document.getElementById("slipper");
        image.style.display = 'none';

        setIntroComplete(true);
      }, 3000);
    }
    setup();
  }, []);

  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className={styles.container}>
      <div id={"slipper"} className={styles.intro}>
        <img src="/slipper.png" alt="Mom's Slipper"/>
      </div>
      <div id={"content_container"} className={`${introComplete ? styles.show : styles.hide}`}>
        <div className={`${introComplete ? styles.bg_title : styles.hide}`}>
          <img src="/bg-title.png" alt="Mom's Slipper"/>
        </div>
        <div className={styles.section_container}></div>
        <div className={styles.section_container}>
          <section className={`${styles.infos} ${styles.desc} ${rubik.className}`}>
            <h1>mom&apos;s slipper</h1>
            <p>
              <em>noun:</em> footwear designed to punish those who sell on a whim.<br/>
            </p>
          </section>
        </div>
        <div className={styles.section_container}>
          <img className={styles.target_small} src="/target.png" alt="Target"/>
        </div>
        <div className={styles.section_container}>
          <div className={styles.flex_column}>
            <div className={`${styles.nav_links} ${rubik.className}`}>
              <div className={`${styles.nav_item}`}>
                <a href="https://twitter.com/slipper_sol">
                  <img src="/twitter.svg" alt="Mom's Slipper - Twitter"/>
                </a>
              </div>
              <div className={`${styles.nav_item}`}>
                <a href="https://t.me/momslipper">
                  <img src="/telegram.svg" alt="Mom's Slipper - Telegram"/>
                </a>
              </div>
              <div className={`${styles.nav_item}`}>
                <a href="https://dexscreener.com/solana/8d5dzmjzbenrxywgwxh8wyamxn8x6hr7yhc3ch1xvrxk">
                  <img src="/dexscreener.svg" alt="Mom's Slipper - Dexscreener"/>
                </a>
              </div>
            </div>
            <div className={styles.ca}>
              CA: 3ZY4EixVLv1qnofxQXjksWGpw6uRUkvpvcBQn4KfXZDd
            </div>
          </div>
        </div>
        <div className={styles.section_container}>
          <div className={styles.flex_column}>
            <div className={styles.tokenomics}>
              <img src="/tokenomics.png" alt=""/>
            </div>
            <section className={`${rubik.className}`}>
              <div className={styles.pill_container}>
                <div className={styles.pill}>
                  <div className={styles.header}>
                    Ticker
                  </div>
                  <div className={styles.detail}>
                    $MOMS
                  </div>
                </div>
                <div className={styles.pill}>
                  <div className={styles.header}>
                    Total Supply
                  </div>
                  <div className={styles.detail}>
                    1.000.000.000
                  </div>
                </div>
                <div className={styles.pill}>
                  <div className={styles.header}>
                    Tax
                  </div>
                  <div className={styles.detail}>
                    0/0
                  </div>
                </div>
              </div>
            </section>
            <section className={rubik.className}>
              <a href="https://v2.raydium.io/swap/?inputCurrency=sol&outputCurrency=3ZY4EixVLv1qnofxQXjksWGpw6uRUkvpvcBQn4KfXZDd&fixed=in">
                <div className={styles.pill_container}>
                  <div className={styles.pill_button}>
                    Buy $MOMS
                  </div>
                </div>
              </a>
            </section>
          </div>
        </div>
        <div className={styles.section_container}>
          <div className={styles.flex_column}>
            <div className={styles.memes}>
              <img src="/memes.png" alt="memes title"/>
            </div>
            <div className={styles.memes}>
              <img className={styles.target} src="/pikachu.gif" alt="meme"/>
            </div>
            <div className={styles.memes}>
              <img className={styles.target} src="/iggy.gif" alt="meme"/>
            </div>
            <div className={styles.memes}>
              <img className={styles.target} src="/slap-anime1.gif" alt="meme"/>
            </div>
            <div className={styles.memes}>
              <img className={styles.target} src="/chalk.gif" alt="meme"/>
            </div>
            <div className={styles.memes}>
              <img className={styles.target} src="/pepe-punch1.png" alt="meme"/>
            </div>
            <div className={styles.memes}>
              <img className={styles.target} src="/girl-point.png" alt="meme"/>
            </div>
            <div className={styles.memes}>
              <img className={styles.target} src="/flextape.png" alt="meme"/>
            </div>
          </div>
        </div>
        <div className={styles.handslipper}>
          <img src="/hand-slipper.png" alt=""/>
        </div>
      </div>
    </div>
  );
}
