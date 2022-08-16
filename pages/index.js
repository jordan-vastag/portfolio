import Head from 'next/head';

import LogoLarge from '../public/images/logo_large.png';
import LogoLargeTransparent from '../public/images/logo_large_bgtransparent.png';
import LogoSmall from '../public/images/logo_small.png';

import Navbar from '../components/js/Navbar.js';
import Footer from '../components/js/Footer.js';

import Splash from '../sections/js/Splash.js';
import About from '../sections/js/About.js';
import Projects from '../sections/js/Projects';
import Resume from '../sections/js/Resume.js';
import Contact from '../sections/js/Contact.js';

const navLinks = [
  { text: 'About', id: 'about' },
  { text: 'Resumé', id: 'resume' },
  { text: 'Projects', id: 'projects' },
  { text: 'Contact', id: 'contact' },
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
      <div id="top" />
      <Navbar id="navbar" logo={LogoSmall} links={navLinks} />
      <Splash id="splash" />
      <About id="about" />
      <Projects id="projects" />
      <Resume id="resume" />
      <Contact id="contact" />
      <Footer id="footer" />
    </>
  );
}

export default Portfolio;
