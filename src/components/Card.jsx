import styles from "./Card.module.css";

export default function Card({ tittel, ingredienser, pris }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{tittel}</h3>
      <p className={styles.ingredience}>{ingredienser}</p>
      <p className={styles.price}>{pris}</p>
    </div>
  );
}
