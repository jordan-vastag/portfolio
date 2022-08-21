import styles from "../styles/projects.module.scss";
import Project from "../../components/js/Project.js";

const projects = [
  {
    title: "Survey Says",
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
    src: "/images/placeholder.png",
  },
  {
    title: "Loafr",
    description: [
      `lorem ipsum dolor sit amet`,
      `Est iure dolor blanditiis eos ut dolore et. Quia sunt optio dolores doloremque aut aut. Nam deleniti neque assumenda voluptatem. Culpa deleniti saepe perferendis. Fuga quasi fugiat qui eius perspiciatis.`,
      `Aut alias architecto id. Aut ut repudiandae explicabo maiores.`,
    ],
    src: "/images/placeholder.png",
  },
  {
    title: "Drone simulation",
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
    src: "/images/placeholder.png",
  },
];

const Projects = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Projects</h2>
      <br />
      <span className={styles.gallery}>
        {projects.map((project, i) => {
          return (
            <Project
              key={i}
              title={project.title}
              description={project.description}
              src={project.src}
            />
          );
        })}
      </span>
    </div>
  );
};

export default Projects;
