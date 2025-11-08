import styles from "./Card.module.css";

export default function Card({ tittel, ingredienser, pris }) {
  return (
    <div className={styles.container}>
      <p className={styles.ingredienser}>{ingredienser}</p>
      <p className={styles.price}>{pris}</p>
    </div>
  );
}
