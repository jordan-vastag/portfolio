import styles from '../styles/navbar.module.scss';
import Image from 'next/image';
import scrollTo from '../util/scrollTo';
import GithubIcon from '../public/github144.png';
import LinkedInIcon from '../public/linkedin144.png';

const iconSize = 32;

const NavbarLink = (props) => {
  return (
    <a
      href={`#${props.id}`}
      className={styles.underlineOnHover + ' ' + styles.link}
      onClick={scrollTo(props.id)}
    >
      {props.text}
    </a>
  );
};

const Navbar = (props) => {
  return (
    <nav className={styles.root}>
      <ul className={styles.links}>
        <div className={styles.left}>
          <Image
            className={styles.logo}
            src={props.logo}
            alt="logo"
            onClick={scrollTo('top')}
            height={iconSize}
            width={iconSize}
          />
          <span className={styles.spacer} />
          {props.links.map((link, i) => {
            return <NavbarLink key={i} text={link.text} id={link.id} />;
          })}
        </div>
        <div className={styles.right}>
          <a
            className={styles.icon}
            href="https://www.github.com/jordan-vastag"
            rel="external"
          >
            <Image
              src={LinkedInIcon}
              alt={'LinkedIn logo'}
              width={iconSize}
              height={iconSize}
            />
          </a>
          <span className={styles.verticalDivider} />
          <a
            className={styles.icon}
            href="https://www.linkedin.com/in/jordan-vastag"
            rel="external"
          >
            <Image
              src={GithubIcon}
              alt={'Github logo'}
              width={iconSize}
              height={iconSize}
            />
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
