import styles from '../styles/slideshow-indicator.module.scss';

const SlideshowIndicator = (props) => {
  return (
    <div className={styles.root}>
      {props.isActive && (
        <div data-idx={props.idx} className={styles.indicatorActive} />
      )}
      {!props.isActive && (
        <div
          data-idx={props.idx}
          className={styles.indicator}
          onClick={(e) => props.onClick(e)}
        />
      )}
    </div>
  );
};

export default SlideshowIndicator;
