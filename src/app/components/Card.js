import styles from "./Orange.module.css";
import Link from "next/link";

export default function Card({title, description, link}){
    return(
        <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link
        href={link}
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
                aria-hidden="true"
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
                aria-hidden="true"
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
      </Link>
    </div>
    );
}