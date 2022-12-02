const mongoose = require("mongoose");

const pokedexSchema = new mongoose.Schema({
  id: Number,
  name: String,
  spriteFront: String,
  spriteBack: String,
  shinySpriteFront: String,
  shinySpriteBack: String,
  types: [String],
});

const Pokedex = mongoose.Pokdex || mongoose.model("Pokedex", pokedexSchema);

const getPokemon = () => {
  return Pokedex.find();
};

const seedPokemon = (pokemon) => {
  return Pokedex.create(pokemon);
};

module.exports.getPokemon = getPokemon;
module.exports.seedPokemon = seedPokemon;
