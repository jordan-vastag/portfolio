import styles from '../styles/about.module.scss';

const About = () => {
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <h1>Who am I?</h1>
        <p>
          I'm an aspiring full-stack developer with a passion for learning and
          creating. Want to learn more about my technical expertise? Check out
          my <a href="#projects">projects</a> or my{' '}
          <a
            href="https://linkedin.com/in/jordan-vastag"
            rel="external"
            target="_blank"
          >
            LinkedIn
          </a>
          .
        </p>
        <p>
          Outside of work I enjoy getting active -- preferably outdoors -- in
          any way I can. I play soccer, rock climb, mountain and road bike,
          hike, camp, longboard, and dabble in squash here and there. I'm
          easygoing and enjoy meeting new people; I strongly believe one of the
          best ways to broaden one's worldview is by talking to new people,
          because one can see the world through a different pair of eyes,
          through a filter of unique experiences. It's because of this core
          belief that I thrive whilst collaborating with peers and teammates.
        </p>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default About;
