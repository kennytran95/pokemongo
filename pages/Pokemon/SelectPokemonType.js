import styles from "../../styles/SelectPokemonType.module.css";

function SelectPokemonType({ filterList }) {
  return (
    <div className={styles.selCont}>
      <div>
        <label htmlFor="type" className={styles.label}>
          Filter By Type
        </label>
        <br />
        <select
          className={styles.selType}
          id="type"
          onChange={(e) => filterList(e.target.value)}
        >
          <option className={styles.opt} value="Sort by Type" hidden>
            Sort by Type
          </option>
          <option className={styles.opt}>Show All</option>
          <option className={styles.opt}>Normal</option>
          <option className={styles.opt}>Grass</option>
          <option className={styles.opt}>Fire</option>
          <option className={styles.opt}>Water</option>
          <option className={styles.opt}>Poison</option>
          <option className={styles.opt}>Electric</option>
          <option className={styles.opt}>Ground</option>
          <option className={styles.opt}>Fighting</option>
          <option className={styles.opt}>Psychic</option>
          <option className={styles.opt}>Rock</option>
          <option className={styles.opt}>Ghost</option>
          <option className={styles.opt}>Dragon</option>
          <option className={styles.opt}>Dark</option>
          <option className={styles.opt}>Steel</option>
          <option className={styles.opt}>Fairy</option>
        </select>
      </div>
    </div>
  );
}

export default SelectPokemonType;
