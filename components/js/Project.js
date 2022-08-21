import styles from "../styles/project.module.scss";
import Image from "next/image";

const Project = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <Image src={props.src} width={250} height={250} />
      </div>
      <div className={styles.right}>
        <h3>{props.title}</h3>
        {props.description.map((paragraph, i) => {
          return <p key={i}>{paragraph}</p>;
        })}
      </div>
    </div>
  );
};

export default Project;
