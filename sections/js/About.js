import styles from '../styles/about.module.scss';
import Slideshow from '../../components/js/Slideshow.js';

const About = () => {
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <h2 className={styles.title}>Who am I?</h2>
        <h4>The elevator pitch:</h4>
        <p className={styles.body}>
          <span className={styles.emphasize}>
            I'm an aspiring full-stack developer with a passion for learning.
          </span>{' '}
          I'm a senior in the College of Science and Engineering at the
          University of Minnesota located in Minneapolis, MN. I have project
          experience ranging from working at a low level in assembly to working
          at a high level developing full stack web applications with modern
          technologies.
        </p>
        {/* TODO: add logos of technologies I've used */}
        {/* <br /> */}
        <p className={styles.aside}>Want to learn more?</p>
        <p className={styles.aside}>
          Check out my <a href="#projects">projects</a> or my{' '}
          <a
            href="https://linkedin.com/in/jordan-vastag"
            rel="external"
            target="_blank"
          >
            LinkedIn
          </a>
          .
        </p>
        <hr />
        <h4>The good stuff:</h4>
        <p className={styles.body}>
          Outside of work I love to get active — preferably outdoors — in any
          way I can. I play soccer, mountain and road bike, rock climb, hike,
          camp, longboard, and play squash here and there. I love to travel and
          I plan to visit every continent at least once in my life.
        </p>
        {/* TODO: make this sound less pretentious */}
        <p className={styles.body}>
          I'm easygoing and I enjoy meeting new people; I strongly believe one
          of the best ways to broaden one's worldview is by talking to new
          people, because one can see the world through a different pair of
          eyes, through a filter of unique experiences. It's because of this
          core belief that I thrive whilst collaborating with peers and
          teammates.
        </p>
      </div>
      <div className={styles.right}>
        <Slideshow />
      </div>
    </div>
  );
};

export default About;
