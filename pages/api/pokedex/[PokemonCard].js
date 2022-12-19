import connectMongo from "../../../utils/connectMongo";
import Pokedex from "../../../models/pokedexModel";

export default async function pokedex(req, res) {
  const id = req.query.id;
  if (req.method === "GET") {
    await connectMongo();
    const pokemon = await Pokedex.find({ id: id }).sort({ id: 1 });
    res.send(pokemon);
  } else {
    res.status(400).send("Invalid request.");
  }
}
