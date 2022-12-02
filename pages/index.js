import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import seed from "../seed";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemongo</title>
        <meta name="description" content="Pokedex List App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
