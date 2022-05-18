// Hello ✋
//
// Welcome to the server side of Gsho💙
//
// This Application Uses Express, jmdict's db, better-sqlite3, TypeORM, GraphQL.JS, AND MUCH MORE!!! 🎆
// Theres not much comment to help understand the application, sorry.. 🤣
//
// 🤝Inspired by Lorenzi's jisho
// 💝Created by SubTeno💝
import { AppDataSource } from "./data-source";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema, GraphQLObjectType } from "graphql";
import cors from "cors";
import entry from "./graphql/Queries/get";

// GRAPHQL
const query = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    entry: entry,
  },
});

var schema = new GraphQLSchema({
  query: query,
});
//

// INITIALIZING EXPRESS
const main = async () => {
  // EXPRESS SERVER
  const app = express();
  const port = 3001;
  // CORS
  app.use(cors());
  // JSON
  app.use(express.json());
  // GRAPHQL
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  );
  // HANDLING UNHANDLED ROUTES
  app.get("*", (_req, res) => {
    res.status(404).send("Get out....");
  });
  // INITALIZING DB
  await AppDataSource.initialize()
    .then(() => console.log("DB INITIALIZED"))
    .catch((e) => console.log(e));

  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
};
//

// Execute server
main().catch((err) => {
  console.log(err);
});
