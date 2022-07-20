import styles from './VerticalSlider.module.scss';

const VerticalSlider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.description}></div>
      <div className={styles.image}></div>
    </div>
  );
};

export default VerticalSlider;
