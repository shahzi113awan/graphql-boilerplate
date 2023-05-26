import { Collection, MongoClient, Db } from "mongodb";
import { Database } from "../lib/types";
import "dotenv/config";
const url = `${process.env.MONGO_DB_URL}`;

interface Param {
  name: string;
  value: string;
}

let mongoConnString = process.env.MONGO_DB_URL as string;
const mongoClient = new MongoClient(mongoConnString);
var mongoConnect = mongoClient.connect();
export const connectDatabase = async (): Promise<Db> => {
  const client = new MongoClient(mongoConnString);

  try {
    await client.connect();
    console.log("Connected to the database");
    const db = client.db("main");
    return db;
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    throw error;
  }
};
export function MongoCollection<T extends Document>(name: string): Collection<T> {
  const collection = mongoClient
    .db(process.env.DB_NAME)
    .collection<T>(name);

  return collection;
}