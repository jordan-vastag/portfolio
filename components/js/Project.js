import styles from '../styles/project.module.scss';
import Image from 'next/image';

const badgeSrc = [
  { React: '/badges/react100.png' },
  { JS: '/badges/javascript100.png' },
  { HTML: '/badges/html100.png' },
  { Java: '/badges/java100.png' },
  { Lombok: '/badges/lombok.png' },
  { Spring: '/badges/spring.png' },
  { 'SQL Server': '/badges/sql-server690.png' },
  { SQLite: '/badges/sqlite.png' },
  { Lucidchart: '/badges/lucidchart96.png' },
  { Jira: '/badges/jira100.png' },
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
