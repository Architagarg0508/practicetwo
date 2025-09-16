import styles from "./Orange.module.css";
import Image from "next/image";
export default function Orange() {
  return (
    <section className={styles.orangeSection}>
      <picture className={styles.topline}>
        <Image
          src="/Vector48.svg"
          alt="curve"
          height={0}
          width={0}
          className={styles.curve1}
        />
      </picture>
      {/* <img src="/Vector48.svg" className={styles.curve1} alt="curve" /> */}

      <h1 className={styles.mainTextHeading}>
        HAPPINESS is <br /> <span>NOT A GOAL.</span>
      </h1>
      <p className={styles.mainTextPara}>
        It is an outcome. <br />
        An outcome of a life with meaning.
      </p>

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
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0.515625L17.4853 9.00091L9 17.4862"
                      stroke="black"
                    />
                    <path d="M0.514719 9.00091H17.4853" stroke="black" />
                  </svg>
                </span>
                <span className={styles.arrow2}>
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0.515625L17.4853 9.00091L9 17.4862"
                      stroke="black"
                    />
                    <path d="M0.514719 9.00091H17.4853" stroke="black" />
                  </svg>
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
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0.515625L17.4853 9.00091L9 17.4862"
                      stroke="black"
                    />
                    <path d="M0.514719 9.00091H17.4853" stroke="black" />
                  </svg>
                </span>
                <span className={styles.arrow2}>
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0.515625L17.4853 9.00091L9 17.4862"
                      stroke="black"
                    />
                    <path d="M0.514719 9.00091H17.4853" stroke="black" />
                  </svg>
                </span>
              </span>
            </div>
          </a>
        </div>
      </div>
      <picture className={styles.bottomline}>
        <Image
          src="/Vector47.svg"
          alt="curve"
          height={0}
          width={0}
          className={styles.curve2}
        />
      </picture>
    </section>
  );
}
