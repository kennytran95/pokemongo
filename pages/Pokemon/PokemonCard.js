import styles from "../../styles/PokemonCard.module.css";

export default function PokemonCard({ pokemonEntry }) {
  return (
    <div className={styles.card}>
      <div className={styles.spriteContainer}>
        <img className={styles.sprite} src={pokemonEntry.spriteBack}></img>
        <img className={styles.sprite} src={pokemonEntry.spriteFront}></img>
        <br />
        <img className={styles.sprite} src={pokemonEntry.shinySpriteBack}></img>
        <img
          className={styles.sprite}
          src={pokemonEntry.shinySpriteFront}
        ></img>
      </div>
      <div className={styles.nameContainer}>
        <p>{pokemonEntry.name}</p>
      </div>
    </div>
  );
}
