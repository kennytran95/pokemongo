const axios = require("axios");
const { pokedexEntries } = require("./pokedexEntries.js");

async function fetchPokemon(pokemon) {
  let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  return result;
}

async function seed() {
  let pokemonCount = 151;
  let pokemonList = [];
  for (let i = 895; i <= 898; i++) {
    let pokemon = pokedexEntries[i];
    let result = await fetchPokemon(pokemon);
    let pokemonData = {
      name: result.data.name,
      spriteFront: result.data.sprites.front_default, //safe navigation operator
      //if object is undefined, return nil.
      //If not undefined, accesses the property as normal b/c it is safe
      spriteBack: result.data.sprites.back_default,
      shinySpriteFront: result.data.sprites.front_shiny,
      shinySpriteBack: result.data.sprites.back_shiny,
      height: result.data.height,
      weight: result.data.weight,
      types: [],
    };
    for (let type of result.data.types) {
      pokemonData.types.push(type.type.name);
    }
    pokemonList.push(pokemonData);
  }
  for (let pokemonEntry of pokemonList) {
    let result = await axios.post("/api/pokedex", pokemonEntry);
  }
}

seed();
