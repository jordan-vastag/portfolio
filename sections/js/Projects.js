import styles from '../styles/projects.module.scss';
import Project from '../../components/js/Project.js';

const projects = [
  {
    title: 'Survey Says',
    description: [
      `Iste quasi omnis aliquam inventore ipsa exercitationem et ea.
      Asperiores ex fuga voluptates ut explicabo autem. Aut alias
      architecto id. Aut ut repudiandae explicabo maiores. Quia veniam
      amet cum.`,
      `Est iure dolor blanditi is eos ut dolore et. Quia sunt optio
      dolores doloremque aut aut. Nam deleniti neque assumenda
      voluptatem. Culpa deleniti saepe perferendis. Fuga quasi fugiat
      qui eius perspiciatis.`,
    ],
    badges: [
      'React',
      'JS',
      'HTML',
      'CSS',
      'Java',
      'Lombok',
      'Spring Boot',
      'SQL Server',
    ],
  },
  {
    title: 'Loafr',
    description: [
      `lorem ipsum dolor sit amet`,
      `Est iure dolor blanditiis eos ut dolore et. Quia sunt optio dolores doloremque aut aut. Nam deleniti neque assumenda voluptatem. Culpa deleniti saepe perferendis. Fuga quasi fugiat qui eius perspiciatis.`,
      `Aut alias architecto id. Aut ut repudiandae explicabo maiores.`,
    ],
    badges: ['Java', 'SQLite', 'Lucidchart', 'Jira'],
  },
  {
    title: 'Drone simulation',
    description: [
      `Iste quasi omnis aliquam inventore ipsa exercitationem et ea.
    Asperiores ex fuga voluptates ut explicabo autem. Aut alias
    architecto id. Aut ut repudiandae explicabo maiores. Quia veniam
    amet cum.`,
      `Est iure dolor blanditiis eos ut dolore et. Quia sunt optio
    dolores doloremque aut aut. Nam deleniti neque assumenda
    voluptatem. Culpa deleniti saepe perferendis. Fuga quasi fugiat
    qui eius perspiciatis.`,
    ],
    badges: ['C++', 'Docker', 'JS', 'Express', 'Doxygen'],
  },
];

const Projects = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Projects</h1>
      <span className={styles.gallery}>
        {projects.map((project, i) => {
          return (
            <Project
              key={i}
              title={project.title}
              description={project.description}
              tools={project.tools}
            />
          );
        })}
      </span>
    </div>
  );
};

export default Projects;
