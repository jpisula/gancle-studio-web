import styles from './VerticalSlider.module.scss';
import LandingPhoto from 'assets/images/website.webp';
import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';
import classNames from 'classnames';

const VerticalSlider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        <div className={styles.description}>
          <h3 className='h2'>Projekt 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            tempus venenatis ante in facilisis. Suspendisse hendrerit, arcu at
            consequat accumsan, mauris ex sagittis mauris, ut cursus elit nisi
            in enim. Nulla dignissim libero enim, quis lobortis ante auctor nec.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            tempus venenatis ante in facilisis. Suspendisse hendrerit, arcu at
            consequat accumsan, mauris ex sagittis mauris, ut cursus elit nisi
            in enim.
          </p>
        </div>
        <img src={LandingPhoto.src} alt='landing photo' />
      </div>
      {/* <div className={styles.actionButtons}> */}
      <div className={classNames(styles.arrow, styles.downArrow)}>
        <FaLongArrowAltDown />
      </div>
      <div className={classNames(styles.arrow, styles.upArrow)}>
        <FaLongArrowAltUp />
      </div>
      {/* </div> */}
    </div>
  );
};

export default VerticalSlider;
