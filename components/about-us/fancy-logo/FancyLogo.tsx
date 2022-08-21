import styles from './FancyLogo.module.scss';

const FancyLogo = () => {
  return (
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
            <span>AŻOWANIE</span> <span>UFANIE</span> <span>OWOCZESNOŚĆ</span>{' '}
            <span>ZNOŚĆ</span> <span>ASYKA</span> <span>NIE</span>
          </span>
        </div>
      </h2>
    </div>
  );
};

export default FancyLogo;
