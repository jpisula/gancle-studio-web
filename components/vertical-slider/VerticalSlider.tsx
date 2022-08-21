import styles from './VerticalSlider.module.scss';
import LandingPhoto from 'assets/images/website.webp';
import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

interface ISlides {
  description: JSX.Element;
  imageSrc: string;
  imageAlt: string;
}

interface VerticalSliderProps {
  slides: ISlides[];
}

const VerticalSlider = ({ slides }: VerticalSliderProps) => {
  const [active, setActive] = useState(0);
  const [percentage, setPercentage] = useState('-100%');

  useEffect(() => {
    setPercentage(-545 * active + 'px');
  }, [active]);

  const goPrev = () => {
    if (active === 0) {
      return;
    }
    setActive(active - 1);
  };

  const goNext = () => {
    if (active >= slides.length - 1) {
      return;
    }
    setActive(active + 1);
  };

  return (
    <div className={styles.slider}>
      <div
        className={styles.slides}
        style={{ transform: `translate3d(0, ${percentage}, 0)` }}
      >
        {slides.map((el) => (
          <div className={styles.slide}>
            <div className={styles.description}>{el.description}</div>
            <img src={el.imageSrc} alt={el.imageAlt} />
          </div>
        ))}
      </div>
      <div
        className={classNames(styles.arrow, styles.downArrow)}
        onClick={goNext}
      >
        <FaLongArrowAltDown />
      </div>
      <div
        className={classNames(styles.arrow, styles.upArrow)}
        onClick={goPrev}
      >
        <FaLongArrowAltUp />
      </div>
    </div>
  );
};

export default VerticalSlider;
