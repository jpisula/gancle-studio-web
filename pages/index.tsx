import Header from 'components/header/Header';
import type { NextPage } from 'next';
import wave from 'assets/svg/wave.svg';
import styles from './index.module.scss';
import classNames from 'classnames';

const Home: NextPage = () => {
  console.log(wave);
  return (
    <>
      <Header />
      <section className={styles.landing}>
        <div className={classNames('container', styles.landingContainer)}>
          <div className={styles.welcomeText}>
            <h1>
              Szukasz szansy na <mark className={styles.animSpan1}>rozwój</mark>{' '}
              swojej <mark className={styles.animSpan2}>marki</mark>?
            </h1>
            <h2>
              Pomożemy Ci zbudować stronę Twoich marzeń, dzięki której{' '}
              <mark className={styles.animSpan3}>każdy o Tobie usłyszy</mark>!
            </h2>
            <button role='button'>
              <span className='p'>Poznaj nasze wartości</span>
            </button>
          </div>
        </div>
      </section>

      <section className={styles.promo}>
        <img src={wave.src} />
      </section>
    </>
  );
};

export default Home;
