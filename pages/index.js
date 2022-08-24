import styles from '../styles/index.module.scss';

// TODO: update small logo to just be stylized letters JV
import LogoLarge from '../public/images/logo_large.png';
import LogoLargeTransparent from '../public/images/logo_large_bgtransparent.png';
import LogoSmall from '../public/images/logo_small.png';

import Head from 'next/head';
import Navbar from '../components/js/Navbar.js';
import Footer from '../components/js/Footer.js';
import Splash from '../sections/js/Splash.js';
import About from '../sections/js/About.js';
import Projects from '../sections/js/Projects';
import Resume from '../sections/js/Resume.js';
import Contact from '../sections/js/Contact.js';

const navLinks = [
  { text: 'About', section: 'about' },
  { text: 'Resumé', section: 'resume' },
  { text: 'Projects', section: 'projects' },
  { text: 'Contact', section: 'contact' },
];

function Portfolio() {
  return (
    <>
      <Head>
        <title>Jordan Vastag Portfolio</title>
        <meta
          name="description"
          content="Jordan Vastag's portfolio. It describes his character and showcases his projects."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <div className={styles.root}>
        <Navbar name="navbar" id="navbar" logo={LogoSmall} links={navLinks} />
        <Splash name="splash" id="splash" />
        <div className={styles.content}>
          <About name="about" id="splash" />
          <Projects name="projects" id="splash" />
          <Resume name="resume" id="resume" />
          <Contact name="contact" id="contact" />
        </div>
        <Footer name="footer" id="footer" />
      </div>
    </>
  );
}

export default Portfolio;
