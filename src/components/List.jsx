import Card from "./Card";
import styles from "./List.module.css";

export default function List(props) {
  // props = ett menyobjekt (f.eks. { id, navn, kategori, pris, bilde, beskrivelse })
  return (
    <div className={styles.listItem}>
      <Card {...props} />
    </div>
  );
}
