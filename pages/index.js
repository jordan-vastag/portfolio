import Head from 'next/head';

import Logo from '../public/placeholder48.png';

import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

import Splash from '../components/page-sections/Splash.js';
import About from '../components/page-sections/About.js';
import Projects from '../components/page-sections/Projects';
import Resume from '../components/page-sections/Resume.js';
import Contact from '../components/page-sections/Contact.js';

const navLinks = [
  { text: 'About', id: 'about' },
  { text: 'Resumé', id: 'resume' },
  { text: 'Projects', id: 'projects' },
  { text: 'Contact', id: 'contact' },
];

function Portfolio({ styles }) {
  return (
    <>
      <Head>
        <title>Jordan Vastag Portfolio</title>
        <meta
          name="description"
          content="Jordan Vastag's portfolio. It showcases his projects and provides an introduction to his character."
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div id="top" />
      <Navbar id="navbar" logo={Logo} links={navLinks} />
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
