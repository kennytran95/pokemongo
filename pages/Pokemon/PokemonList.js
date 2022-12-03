import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import styles from "../../styles/PokemonList.module.css";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      let result = await axios.get("/api/pokedex");
      let kanto = result.data.slice(0, 386);
      setPokemonList(kanto);
    }
    getPokemon();
  }, []);

  return (
    <section className={styles.pokemonList}>
      {pokemonList.map((pokemonEntry) => {
        return (
          <PokemonCard key={pokemonEntry._id} pokemonEntry={pokemonEntry} />
        );
      })}
    </section>
  );
}
