import { Schema, models, model } from "mongoose";

const pokedexSchema = new Schema({
  id: Number,
  name: String,
  spriteFront: String,
  spriteBack: String,
  shinySpriteFront: String,
  shinySpriteBack: String,
  height: Number,
  weight: Number,
  types: [String],
});

module.exports = models.Pokedex || model("Pokedex", pokedexSchema);
