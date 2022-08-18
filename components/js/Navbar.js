import styles from '../styles/navbar.module.scss';

import { useState } from 'react';

import Image from 'next/image';
import GithubIcon from '../../public/icons/github144.png';
import LinkedInIcon from '../../public/icons/linkedin144.png';
import MailIcon from '../../public/icons/mail96.png';
import PhoneIcon from '../../public/icons/phone96.png';

const iconSize = 32;

const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
};

const NavbarLink = (props) => {
  return (
    <a
      href={`#${props.linkTo}`}
      className={`${styles.link} ${styles.underlineOnHover}`}
    >
      {props.text}
    </a>
  );
};

const Navbar = (props) => {
  // TODO: show phone number in a rounded pop up box with delay
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  // TODO: show email in a rounded pop up box with delay
  const [showEmail, setShowEmail] = useState(false);

  const toggleShowPhoneNumber = () => {
    setShowPhoneNumber(!showPhoneNumber);
  };

  const toggleShowEmail = () => {
    setShowEmail(!showEmail);
  };

  return (
    <nav className={styles.root}>
      <ul className={styles.links}>
        <div className={styles.left}>
          <Image
            className={styles.logo}
            src={props.logo}
            alt="logo"
            onClick={scrollToTop}
            height={iconSize}
            width={iconSize}
          />
          <span className={styles.spacer} />
          {props.links.map((link, i) => {
            return (
              <NavbarLink key={i} text={link.text} linkTo={link.section} />
            );
          })}
        </div>
        <div className={styles.right}>
          <Image
            src={PhoneIcon}
            alt={'Phone icon'}
            width={24}
            height={24}
            onMouseOver={toggleShowPhoneNumber}
            onMouseOut={toggleShowPhoneNumber}
          />
          <span className={styles.verticalDivider} />
          <a
            className={styles.icon}
            href="mailto:jordanrvastag@gmail.com"
            rel="external"
            target="_blank"
          >
            <Image
              src={MailIcon}
              alt={'Envelope email icon'}
              width={24}
              height={24}
              onMouseOver={toggleShowEmail}
              onMouseOut={toggleShowEmail}
            />
          </a>
          <span className={styles.verticalDivider} />
          <a
            className={styles.icon}
            href="https://github.com/jordan-vastag"
            rel="external"
            target="_blank"
          >
            <Image
              src={LinkedInIcon}
              alt={'LinkedIn logo'}
              width={iconSize}
              height={iconSize}
            />
          </a>
          <span className={styles.verticalDivider} />
          {/* TODO: add linkedin badge on hover */}
          {/* <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="jordan-vastag" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/jordan-vastag?trk=profile-badge">Jordan Vastag</a></div> */}

          <a
            className={styles.icon}
            href="https://linkedin.com/in/jordan-vastag"
            rel="external"
            target="_blank"
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
