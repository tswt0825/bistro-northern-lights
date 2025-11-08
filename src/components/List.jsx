import { useState } from "react";
import Card from "./Card";
import styles from "./List.module.css";



export default function List(menyItem) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{menyItem.tittel}</h3>
      <Card {...menyItem} />
    </div>
  );
}

/*  style={{ border: "1px solid white", margin: "20px" }}*/
