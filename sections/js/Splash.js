import styles from '../styles/splash.module.scss';
import Image from 'next/image';
import SabinoCanyon from '../../public/images/sabino_canyon_blacketts_ridge_standing.png';

const Splash = () => {
  return (
    <div className={styles.root}>
      <div className={styles.splashBox}>
        <Image
          src={SabinoCanyon}
          alt="Jordan standing on the peak of Blacketts Ridge in Sabino Canyon Recreation Area on the outskirts of Tucson, AZ"
          priority="true"
          placeholder="blur"
          layout="responsive"
        />
        <div className={styles.hero}>Hi, I'm Jordan Vastag</div>
      </div>
    </div>
  );
};

export default Splash;
