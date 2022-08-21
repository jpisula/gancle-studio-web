import classNames from 'classnames';
import VerticalSlider from 'components/vertical-slider/VerticalSlider';
import styles from './Realizations.module.scss';
import LandingPhoto from 'assets/images/website.webp';

const Realizations = () => {
  return (
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
        <VerticalSlider
          slides={[
            {
              imageSrc: LandingPhoto.src,
              imageAlt: 'Landing photo',
              description: (
                <>
                  <h3 className='h2'>Projekt 1</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin tempus venenatis ante in facilisis. Suspendisse
                    hendrerit, arcu at consequat accumsan, mauris ex sagittis
                    mauris, ut cursus elit nisi in enim. Nulla dignissim libero
                    enim, quis lobortis ante auctor nec. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin tempus venenatis ante in facilisis. Suspendisse
                    hendrerit, arcu at consequat accumsan, mauris ex sagittis
                    mauris, ut cursus elit nisi in enim.
                  </p>
                </>
              )
            },
            {
              imageSrc: LandingPhoto.src,
              imageAlt: 'Landing photo',
              description: (
                <>
                  <h3 className='h2'>Projekt 2</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin tempus venenatis ante in facilisis. Suspendisse
                    hendrerit, arcu at consequat accumsan, mauris ex sagittis
                    mauris, ut cursus elit nisi in enim. Nulla dignissim libero
                    enim, quis lobortis ante auctor nec. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin tempus venenatis ante in facilisis. Suspendisse
                    hendrerit, arcu at consequat accumsan, mauris ex sagittis
                    mauris, ut cursus elit nisi in enim.
                  </p>
                </>
              )
            },
            {
              imageSrc: LandingPhoto.src,
              imageAlt: 'Landing photo',
              description: (
                <>
                  <h3 className='h2'>Projekt 3</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin tempus venenatis ante in facilisis. Suspendisse
                    hendrerit, arcu at consequat accumsan, mauris ex sagittis
                    mauris, ut cursus elit nisi in enim. Nulla dignissim libero
                    enim, quis lobortis ante auctor nec. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin tempus venenatis ante in facilisis. Suspendisse
                    hendrerit, arcu at consequat accumsan, mauris ex sagittis
                    mauris, ut cursus elit nisi in enim.
                  </p>
                </>
              )
            }
          ]}
        />
      </div>
    </section>
  );
};

export default Realizations;
