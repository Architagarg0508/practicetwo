import styles from "./Orange.module.css";

export default function Orange() {
  return (
    <section className={styles.orangeSection}>
        <img src="/Vector48.svg" className={styles.curve1} alt="curve" />
      
      <div className={styles.mainText}>
        <h1>
          HAPPINESS IS <br /> <span>NOT A GOAL.</span>
        </h1>
        <p>
          It is an outcome. <br />
          An outcome of a life with meaning.
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h2>THE INITIATIVE</h2>
          <p>
            The NYU | Stern Initiative on Purpose and Flourishing is a scholarly
            community for the study of personal meaning.
          </p>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            <span className={styles.btnText}>Learn More</span>
            <div className={styles.Box}>
              <div className={styles.arrowCircle}>
                <span className={styles.arrow}>
                  <img src="/Arrows.svg" alt="arrow" />
                </span>
                <span className={styles.arrow2}>
                  <img src="/Arrows.svg" alt="arrow" />
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className={styles.card}>
          <h2>WEBINARS</h2>
          <p>
            You can learn about the Becoming You and 10-10-10 methodologies in
            our free online webinars.
          </p>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            <span className={styles.btnText}>Learn More</span>
            <div className={styles.Box}>
              <span className={styles.arrowCircle}>
                <span className={styles.arrow}>
                  <img src="/Arrows.svg" alt="arrow" />
                </span>
                <span className={styles.arrow2}>
                  <img src="/Arrows.svg" alt="arrow" />
                </span>
              </span>
            </div>
          </a>
        </div>
      </div>
       <img src="/Vector47.svg" className={styles.curve2} alt="curve" />
    </section>
  );
}
