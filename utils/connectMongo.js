import mongoose from "mongoose";

export default async function connectMongo() {
  mongoose.connect("mongodb://localhost:27017/pokedex");
}
