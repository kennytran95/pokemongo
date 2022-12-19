import connectMongo from "../../utils/connectMongo";
import Pokedex from "../../models/pokedexModel";

export default async function pokedex(req, res) {
  if (req.method === "POST") {
    await connectMongo();
    const pokemon = await Pokedex.create(req.body);
    res.send("Successfully posted to mongodb database");
  } else if (req.method === "GET") {
    await connectMongo();
    const pokemon = await Pokedex.find({}).sort({ id: 1 });
    res.json(pokemon);
  } else {
    res.status(400).send("Invalid request.");
  }
}
