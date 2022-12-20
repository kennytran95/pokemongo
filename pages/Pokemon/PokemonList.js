import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import PokemonCard from "./PokemonCard";
import styles from "../../styles/PokemonList.module.css";
import Link from "next/link";
import SelectPokemonType from "./SelectPokemonType";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, toggleLoading] = useState(false);

  useEffect(() => {
    getPokemon();
  }, []);

  async function getPokemon() {
    toggleLoading(true);
    let result = await axios.get("/api/pokedex");
    let kanto = result.data.slice(0, 151);
    setPokemonList(kanto);
    toggleLoading(false);
  }

  async function filterList(type) {
    console.log(type);
    if (type === "Show All") {
      getPokemon();
    } else {
      toggleLoading(true);
      let result = await axios.get("/api/pokedex");
      let kanto = result.data.slice(0, 151);
      const filteredPokemon = kanto.filter((pokemon) =>
        pokemon.types.includes(type.toLowerCase())
      );
      toggleLoading(false);
      setPokemonList(filteredPokemon);
    }
  }

  if (loading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <>
      <SelectPokemonType filterList={filterList} />
      <section className={styles.pokemonList}>
        {pokemonList.map((pokemonEntry) => {
          return (
            <Link
              href={`/Pokemon/PokemonCard/pokemonentry?id=${pokemonEntry.id}`}
              key={pokemonEntry.id}
            >
              <PokemonCard key={pokemonEntry.id} pokemonEntry={pokemonEntry} />
            </Link>
          );
        })}
      </section>
    </>
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
