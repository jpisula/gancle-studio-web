import Header from 'components/header/Header';
import type { NextPage } from 'next';
import LandingPhoto from 'assets/images/website.webp';
import wave from 'assets/svg/wave.svg';
import styles from './index.module.scss';
import classNames from 'classnames';
import ReactVisibilitySensor from 'react-visibility-sensor';

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
            <button role='button'>
              <span className='p'>Poznaj nas</span>
            </button>
            <img src={LandingPhoto.src} alt='landing photo' />
          </div>
        </div>
      </section>

      <section className={styles.promo}>
        <img src={wave.src} />
        <div className='container'>
          <div className={styles.aboutUs}>
            <div className={styles.aboutUsDesc}>
              <ReactVisibilitySensor>
                {({ isVisible }: { isVisible: boolean }) => (
                  <h2 className={classNames(isVisible && styles.animMark)}>
                    Kim jesteśmy?
                  </h2>
                )}
              </ReactVisibilitySensor>
              <p>
                Nasza firma została utworzona przez dwójkę przyjaciół, którzy od
                lat pasjonują się programowaniem. Łącznie posiadamy ponad 8 lat
                zawodowego doświadczenia w tworzeniu stron internetowych. Nasi
                programiści pracowali m.in. przy dużych systemach
                administracyjnych czy przy rozwijaniu wiodących serwisów
                internetowych.
              </p>
              <p>
                W procesie tworzenia stron dla klientów skupiamy się głównie na
                spełnieniu wymagań biznesowych oraz dostosowaniu projektu pod
                profil klienta (wygląd strony, treści, doświadczenie
                użytkowników strony). Pomagamy również w rozwoju marki naszych
                klientów poprzez propozycje zmian na stronie, dbaniu o SEO
                (wyświetlanie na górze w wynikach wyszukiwarek internetowych), a
                także doradzając jakie kroki powinien podjąć klient, aby zostać
                zauważonym w świecie internetu.
              </p>
              <div className={styles.blockquoteWrapper}>
                <div className={styles.blockquote}>
                  <h3>
                    Naszym celem jest zadbanie o rozwój marki naszego klienta.
                  </h3>
                </div>
              </div>
            </div>

            <div className={styles.fancyLogoExpanded}>
              <h2>
                <div>
                  <span className={styles.nameExpandedTop}>
                    <span>ZAAN</span>
                    <span>Z</span>
                    <span style={{ visibility: 'hidden' }}>.</span>
                    <span>SKUTE</span>
                    <span>K</span> <span>DOŚWIADCZ</span>
                  </span>
                  <div className={styles.companyName}>
                    <span>G</span>
                    <span>A</span>
                    <span>N</span>
                    <span>C</span>
                    <span>L</span>
                    <span>E</span>
                    <span className={styles.studio}>Studio</span>
                  </div>
                  <span className={styles.nameExpandedBottom}>
                    <span>AŻOWANIE</span> <span>UFANIE</span>{' '}
                    <span>OWOCZESNOŚĆ</span> <span>ZNOŚĆ</span>{' '}
                    <span>ASYKA</span> <span>NIE</span>
                  </span>
                </div>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
