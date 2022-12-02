import axios from "axios";
import pokedexEntries from "./pokedexEntries.js";
// import db from "./models/pokedexModel.js";

async function seed() {
  let pokemonCount = 151;
  let pokemonList = [];
  for (let i = 1; i <= 6; i++) {
    let pokemon = pokedexEntries[i];
    // let pokemonData = {};
    let result = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    let pokemonData = {
      name: result.data.name,
      frontSprite: result.data.sprites.front_default,
      backSprite: result.data.sprites.back_default,
      frontShinySprite: result.data.sprites.front_shiny,
      backShinySprite: result.data.sprites.back_shiny,
      height: result.data.height,
      weight: result.data.weight,
      types: [],
    };
    for (let type of result.data.types) {
      pokemonData.types.push(type.type.name);
    }
    pokemonList.push(pokemonData);
  }
  console.log(pokemonList);
}

seed();
