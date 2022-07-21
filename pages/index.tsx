import Header from 'components/header/Header';
import type { NextPage } from 'next';
import LandingPhoto from 'assets/images/website.webp';
import wave from 'assets/svg/wave.svg';
import styles from './index.module.scss';
import classNames from 'classnames';
import ReactVisibilitySensor from 'react-visibility-sensor';
import VerticalSlider from 'components/vertical-slider/VerticalSlider';

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
                <strong>Gancle Studio</strong> zostało utworzone przez dwójkę
                przyjaciół, którzy od dzieciństwa pasjonują się programowaniem.
                <br />
                Łącznie posiadamy
                <strong> ponad 8 lat zawodowego doświadczenia</strong> w
                tworzeniu stron internetowych. Nasi programiści pracowali m.in.
                przy dużych systemach administracyjnych czy przy rozwijaniu
                wiodących serwisów internetowych.
              </p>
              <p>
                W procesie tworzenia stron dla klientów skupiamy się głównie na
                <strong> spełnieniu wymagań biznesowych</strong> oraz{' '}
                <strong>dostosowaniu projektu pod profil klienta</strong>{' '}
                (wygląd strony, treści, doświadczenie użytkowników strony).
                <br />
              </p>
              <p>
                Pomagamy również w{' '}
                <strong>rozwoju marki naszych klientów</strong> poprzez audyty
                stron, propozycje zmian, dbaniu o <strong>SEO</strong>{' '}
                (wyświetlanie na górze w wynikach wyszukiwarek internetowych), a
                także <strong>doradzając klientowi</strong> jakie kroki powinien
                podjąć, aby zostać{' '}
                <strong>zauważonym w świecie internetu</strong>.
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
      <section className={styles.realizations}>
        <div className={styles.triangleDivider}>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M649.97 0L550.03 0 599.91 54.12 649.97 0z'
              className={styles.triangleFill}
            ></path>
          </svg>
        </div>

        <h2>NASZE PRZYKŁADOWE REALIZACJE</h2>
        <div className={classNames(styles.slider, 'container')}>
          <VerticalSlider />
        </div>
      </section>
    </>
  );
};

export default Home;
