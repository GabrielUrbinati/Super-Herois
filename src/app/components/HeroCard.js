import React from "react";
import styles from "./HeroCard.module.css";

export default function HeroCard({ hero }) {
  return (
    <div className={styles.card}>
      <img src={hero.image.url} alt={hero.name} className={styles.image} />
      <h2 className={styles.name}>{hero.name}</h2>
      <div className={styles.stats}>
        <p>Intelligence: {hero.powerstats.intelligence}</p>
        <p>Strength: {hero.powerstats.strength}</p>
      </div>
    </div>
  );
}
