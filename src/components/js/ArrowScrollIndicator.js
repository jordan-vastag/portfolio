import styles from '../styles/arrow-scroll-indicator.module.scss';

const ArrowScrollIndicator = () => {
  return (
    <div
      className={`${styles.arrowContainer} ${styles.animated} ${styles.fadeInDown}`}
    >
      <div className={styles.arrow2} />
      <div
        className={`${styles.arrow1} ${styles.animated} ${styles.hinge} ${styles.infinite} ${styles.zoomIn}`}
      />
    </div>
  );
};

export default ArrowScrollIndicator;
