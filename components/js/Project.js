import styles from '../styles/project.module.scss';
import Image from 'next/image';

const badgeSrc = [
  { React: '/badges' },
  { JS: '/badges' },
  { HTML: '/badges' },
  { Java: '/badges' },
  // { Lombok: '/badges' },
  // { 'Spring Boot': '/badges' },
  // { 'SQL Server': '/badges' },
  // { SQLite: '/badges' },
  // { Lucidchart: '/badges' },
  { Jira: '/badges' },
];

const Project = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h3>{props.title}</h3>
        <div className={styles.badges}></div>
      </div>
      <div className={styles.body}>
        {props.description.map((paragraph, i) => {
          return <p key={i}>{paragraph}</p>;
        })}
      </div>
    </div>
  );
};

export default Project;
