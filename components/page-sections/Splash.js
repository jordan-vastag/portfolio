import styles from '../../styles/splash.module.scss';
import Image from 'next/image';
// import AerialSTFC from '../../public/aerial_stfc_cropped.png';
import DribblingSTFC from '../../public/dribbling_stfc.png';

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
          alt="Jordan jumping to control a soccer ball while an opponent closes down his space."
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
