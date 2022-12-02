import connectMongo from "../../utils/connectMongo";
import db from "../../models/pokedexModel";

export default async function handler(req, res) {
  console.log("Connecting to MongoDB...");
  await connectMongo();
  console.log("Connected to MongoDB!");
  const result = await db.getPokemon();
  res.status(200).send(result);
}
