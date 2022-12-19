import styles from "../../../styles/PokemonEntryCard.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function PokemonCard() {
  const {
    query: { id },
  } = useRouter();

  const [pokemonEntry, setPokemonEntry] = useState();
  useEffect(() => {
    async function getIndividualPokemon() {
      let result = await axios.get(
        `http://localhost:3000/api/pokedex/pokemoncard?id=${id}`
      );
      setPokemonEntry(result.data[0]);
    }
    if (id) getIndividualPokemon();
  }, [id]);

  if (!pokemonEntry) return null;

  return (
    <section className={styles.individualPokemonPage}>
      <Link href="/">
        <button className={styles.return}>
          <FontAwesomeIcon icon={faUndo} className={styles.undoIcon} />
          Return Home
        </button>
      </Link>
      <div className={styles.column}>
        <div className={styles.card}>
          <div className={styles.spriteContainer}>
            <img className={styles.sprite} src={pokemonEntry.spriteBack}></img>
            <img className={styles.sprite} src={pokemonEntry.spriteFront}></img>
            <br />
            <img
              className={styles.sprite}
              src={pokemonEntry.shinySpriteBack}
            ></img>
            <img
              className={styles.sprite}
              src={pokemonEntry.shinySpriteFront}
            ></img>
          </div>
          <div className={styles.nameContainer}>
            <p>{pokemonEntry.name}</p>
          </div>
        </div>
        <table className={styles.typeTable}>
          <thead className={styles.header}>
            <tr>
              <th>Type</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {pokemonEntry.types.map((type) => (
              <tr key={type}>
                <td className={styles.attribute}>Type</td>
                <td className={styles.value}>{type}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul className={styles.bmi}>
          <li className={styles.bmiHW}>Height: {pokemonEntry.height}</li>
          <li className={styles.bmiHW}>Weight: {pokemonEntry.weight}</li>
        </ul>
      </div>
    </section>
  );
}
