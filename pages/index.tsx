import Header from 'components/header/Header';
import type { NextPage } from 'next';
import LandingPhoto from 'assets/images/website.webp';

import styles from './index.module.scss';
import classNames from 'classnames';
import Button from 'components/button/Button';
import Contact from 'components/contact/Contact';
import Realizations from 'components/realizations/Realizations';
import AboutUs from 'components/about-us/AboutUs';

const Home: NextPage = () => {
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
            <div className={styles.buttons}>
              <Button role='button' text='Poznaj nas' />
              <Button role='button' text='Nasza oferta' />
            </div>
            <img src={LandingPhoto.src} alt='landing photo' />
          </div>
        </div>
      </section>

      <AboutUs />

      <Realizations />

      <Contact />
    </>
  );
};

export default Home;
