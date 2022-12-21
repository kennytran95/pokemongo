import styles from "../../styles/Portfolio.module.css";

function Portfolio({ background, avatar }) {
  return (
    <div className={styles.container}>
      <div className={styles.person}>
        <div className={styles.personContainer}>
          <img className={styles.personCircle} src={background} alt=""></img>
          <img className={styles.personImg} src={avatar} alt="person"></img>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
