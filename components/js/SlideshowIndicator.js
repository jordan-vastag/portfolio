import styles from '../styles/slideshow-indicator.module.scss';

const SlideshowIndicator = (props) => {
  return (
    <div className={styles.root}>
      {props.isActive && (
        <div
          className={styles.indicatorActive}
          // onClick={}
        />
      )}
      {!props.isActive && (
        <div
          className={styles.indicator}
          // onClick={}
        />
      )}
    </div>
  );
};

export default SlideshowIndicator;
