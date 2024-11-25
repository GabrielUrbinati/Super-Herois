"use client";

import React, { useState, useEffect } from "react";
import HeroCard from "./components/HeroCard";
import styles from "./page.module.css";

const ACCESS_TOKEN = "4995282617154105";
const BASE_URL = `https://superheroapi.com/api.php/${ACCESS_TOKEN}/`;

export default function Page() {
  const [heroes, setHeroes] = useState([]);

  // Função para buscar heróis pela API
  const fetchHero = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}${id}`);
      if (response.ok) {
        const heroData = await response.json();
        setHeroes((prevHeroes) => [...prevHeroes, heroData]);
      } else {
        console.error("Erro ao buscar herói:", response.status);
      }
    } catch (error) {
      console.error("Erro ao buscar herói:", error);
    }
  };

  useEffect(() => {
    fetchHero(1); // Substitua pelos IDs dos heróis que deseja exibir
    fetchHero(2);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Superheroes</h1>
      <div className={styles.cards}>
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </div>
  );
}
