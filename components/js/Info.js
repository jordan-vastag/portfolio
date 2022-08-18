import styles from '../styles/info.module.scss';
import { useState } from 'react';

// TODO: animated transition between expanded and collapsed
const Info = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleIconClick = () => {
    setExpanded(true);
  };

  const handleCloseClick = () => {
    // setTimeout(1000, setClicked(!clicked));
    setExpanded(false);
  };

  return (
    <div className={`${styles.root} ${props.className}`}>
      {!expanded && (
        <img
          className={styles.icon}
          src="/icons/info48.png"
          alt="Info icon"
          onClick={handleIconClick}
        />
      )}

      {expanded && (
        <div className={styles.box}>
          <span className={styles.text}>{props.text}</span>
          <img
            className={styles.close}
            src="/icons/close32.png"
            alt="X shaped close icon"
            onClick={handleCloseClick}
          />
        </div>
      )}
    </div>
  );
};

export default Info;
