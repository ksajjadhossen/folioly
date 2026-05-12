import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.DB_URI;

if (!uri) {
  throw new Error("Please add your DB_URI to .env and restart server.");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client.connect();
}
export async function connectToDatabase() {
  const connectedClient = await clientPromise;
  const database = connectedClient.db(); // এটি নিজে থেকেই 'Devinspo' নিয়ে নেবে
  return { client: connectedClient, database };
}
