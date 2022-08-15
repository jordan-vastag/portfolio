import styles from '../styles/splash.module.scss';
import Image from 'next/image';
import AerialSTFC from '../../../public/images/aerial_stfc_cropped.png';
import DribblingSTFC from '../../../public/images/dribbling_stfc.png';
import ArrowScrollIndicator from '../../components/js/ArrowScrollIndicator.js';

const Splash = () => {
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        {/* <Image
          className={styles.splashImage}
          src={AerialSTFC}
          alt="Jordan jumping to control a soccer ball while an opponent closes down his space."
        /> */}
        <Image
          className={styles.splashImage}
          src={DribblingSTFC}
          // TODO: better alt text
          alt="Jordan playing soccer"
        />
      </div>
      <div className={styles.right}>
        <div className={styles.hero}>Hi, I'm</div>
        <div className={styles.hero}>Jordan Vastag</div>
      </div>
    </div>
  );
};

export default Splash;
