import styles from "./Orange.module.css";
import Image from "next/image";
import Card from "./Card";

export default function Orange() {
  return (
    <section className={styles.orangeSection}>
      <picture className={styles.topline}>
        <Image
          src="/Vector48.svg"
          alt=""
          aria-hidden="true"
          height={0}
          width={0}
          className={styles.curve1}
        />
      </picture>

      <h1 className={styles.mainTextHeading}>
        Happiness is <br /> <span>NOT A GOAL.</span>
      </h1>
      <p className={styles.mainTextPara}>
        It is an outcome. <br />
        An outcome of a life with meaning.
      </p>

      <div className={styles.cards}>
        <Card
          title="The Initiative"
          description="The NYU | Stern Initiative on Purpose and Flourishing is a scholarly
            community for the study of personal meaning."
          link="https://www.google.com"
        />
        <Card
          title="Webinars"
          description=" You can learn about the Becoming You and 10-10-10 methodologies in
            our free online webinars."
          link="https://www.google.com"
        />
      </div>
      <picture className={styles.bottomline}>
        <Image
          src="/Vector47.svg"
          alt=""
          aria-hidden="true"
          height={0}
          width={0}
          className={styles.curve2}
        />
      </picture>
    </section>
  );
}
