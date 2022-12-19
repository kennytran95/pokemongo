import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import styles from "../../styles/PokemonList.module.css";
import Link from "next/link";

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
          <Link
            href={`/Pokemon/PokemonCard/pokemonentry?id=${pokemonEntry.id}`}
          >
            <PokemonCard key={pokemonEntry.id} pokemonEntry={pokemonEntry} />
          </Link>
        );
      })}
    </section>
  );
}

//legacy code ===> ServerSideRendering is outdated with Next.js 13.0+
// export async function getServerSideProps() {
//   const result = await fetch("http://localhost:3000/api/pokedex");
//   const jsonData = await result.json();
//   const kanto = jsonData.data.slice(0, 386);

//   return {
//     props: {
//       kantoPokemon: kanto,
//     },
//   };
// }
