import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import PokemonCard from "./PokemonCard";
import styles from "../../styles/PokemonList.module.css";
import Link from "next/link";
import SelectPokemonType from "./SelectPokemonType";
import HashLoader from "react-spinners/HashLoader";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [loading, toggleLoading] = useState(false);

  async function getPokemon() {
    console.log("CALLED ASYNC GET POKEMON!");
    toggleLoading(true);
    let result = await axios.get("/api/pokedex");
    let kanto = result.data.slice(0, 386);
    setPokemonList(kanto);
    setFilteredPokemonList(kanto);
    toggleLoading(false);
  }

  useEffect(() => {
    getPokemon();
  }, []);

  function filterList(type) {
    if (type === "Show All") {
      setFilteredPokemonList(pokemonList);
    } else {
      toggleLoading(true);
      const filteredPokemon = pokemonList.filter((pokemon) =>
        pokemon.types.includes(type.toLowerCase())
      );
      toggleLoading(false);
      setFilteredPokemonList(filteredPokemon);
    }
  }

  if (loading) {
    return (
      <section className={styles.loadContainer}>
        <HashLoader
          color="aquamarine"
          loading={loading}
          cssOverride={{}}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </section>
    );
  }

  return (
    <>
      <SelectPokemonType filterList={filterList} />
      <section className={styles.pokemonList}>
        {filteredPokemonList.map((pokemonEntry) => {
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
