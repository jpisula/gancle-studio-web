import ReactVisibilitySensor from 'react-visibility-sensor';
import styles from './AboutUs.module.scss';
import wave from 'assets/svg/wave.svg';
import classNames from 'classnames';
import FancyLogo from './fancy-logo/FancyLogo';

const AboutUs = () => {
  return (
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
              <strong> ponad 8 lat zawodowego doświadczenia</strong> w tworzeniu
              stron internetowych. Nasi programiści pracowali m.in. przy dużych
              systemach administracyjnych czy przy rozwijaniu wiodących serwisów
              internetowych.
            </p>
            <p>
              W procesie tworzenia stron dla klientów skupiamy się głównie na
              <strong> spełnieniu wymagań biznesowych</strong> oraz{' '}
              <strong>dostosowaniu projektu pod profil klienta</strong> (wygląd
              strony, treści, doświadczenie użytkowników strony).
              <br />
            </p>
            <p>
              Pomagamy również w <strong>rozwoju marki naszych klientów</strong>{' '}
              poprzez audyty stron, propozycje zmian, dbaniu o{' '}
              <strong>SEO</strong> (wyświetlanie na górze w wynikach
              wyszukiwarek internetowych), a także{' '}
              <strong>doradzając klientowi</strong> jakie kroki powinien podjąć,
              aby zostać <strong>zauważonym w świecie internetu</strong>.
            </p>
            <div className={styles.blockquoteWrapper}>
              <div className={styles.blockquote}>
                <h3>
                  Naszym celem jest zadbanie o rozwój marki naszego klienta.
                </h3>
              </div>
            </div>
          </div>

          <FancyLogo />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
