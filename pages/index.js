import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PokemonList from "./Pokemon/PokemonList";
import Title from "./Title/Title";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemongo</title>
        <meta name="description" content="Pokedex List App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Title />
        <section className={styles.pokemonListContainer}>
          <PokemonList />
        </section>
      </main>
    </>
  );
}
