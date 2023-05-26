import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { connectDatabase } from "./database";
import { resolvers, typeDefs } from "./graphql";

const PORT = process.env.PORT || 5000;
connectDatabase();
const server = new ApolloServer({ typeDefs, resolvers });
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
