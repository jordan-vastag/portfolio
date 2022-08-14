import React, { useEffect } from 'react';
import Head from 'next/head';
import Logo from '../public/placeholder48.png';
import Navbar from '../components/Navbar';
import Splash from '../components/Splash';

const navLinks = [
  { text: 'About', id: 'about' },
  { text: 'Resumé', id: 'resume' },
  { text: 'Projects', id: 'projects' },
  { text: 'Contact', id: 'contact' },
];

function Portfolio() {
  useEffect(() => {
    document.title = 'Jordan Vastag Portfolio';
  }, []);

  return (
    <>
      <Head>
        <title>Jordan Vastag Portfolio</title>
        <meta
          name="description"
          content="Jordan Vastag's portfolio. Showcases projects and describes who he is."
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div id="top">
        <Navbar id="navbar" logo={Logo} links={navLinks} />
        <Splash id="splash" />
        {/* <About id="about">
      <Projects id="projects">
      <Resume id="resume">
      <Contact id="contact" />    */}
      </div>
    </>
  );
}

export default Portfolio;
