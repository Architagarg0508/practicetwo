import styles from "./Orange.module.css";


export default function Orange(){
    return(
        <section className={styles.orangeSection}>
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
                    The NYU | Stern Initiative on Purpose and Flourishing is a 
                    scholarly community for the study of personal meaning.
                </p>
                <button className={styles.btn}>
                   Learn More 
                   <span className={styles.arrow}>
                     <img src="/Arrows.svg" alt="arrow" />
                   </span>
                </button>
            </div>
            <div className={styles.card}>
                <h2>WEBINARS</h2>
                <p>
                    You can learn about the Becoming You and 10-10-10 
                    methodologies in our free online webinars. 
                </p>
                <button className={styles.btn}>
                   Learn More 
                   <span className={styles.arrow}>
                     <img src="/Arrows.svg" alt="arrow" />
                   </span>
                </button>
            </div>

           </div>
        </section>
    );
}
