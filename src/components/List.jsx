import Card from "./Card";
import styles from "./List.module.css";

export default function List({ meny }) {
  if (!meny || !Array.isArray(meny)) {
    return <p>Laster meny...</p>;
  }

  const categories = ["Forrett", "Hovedrett", "Dessert"];

  return (
    <section className={styles.menuSection}>
      {categories.map((category) => (
        <div key={category} className={styles.categoryBlock}>
          <h2 className={styles.categoryTitle}>{category}</h2>
          <div className={styles.grid}>
            {meny
              .filter((item) => item.kategori === category)
              .map((item) => (
                <Card key={item.id} {...item} />
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}
