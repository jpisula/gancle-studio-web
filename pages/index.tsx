import Header from 'components/header/Header';
import type { NextPage } from 'next';
import wave from 'assets/svg/wave.svg';
import styles from './index.module.scss';

const Home: NextPage = () => {
  console.log(wave);
  return (
    <>
      <Header />
      <section className={styles.landing}></section>

      <section className={styles.promo}>
        <img src={wave.src} />
      </section>
    </>
  );
};

export default Home;
