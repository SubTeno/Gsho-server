import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
  } from "graphql";
  
  const senseType = new GraphQLObjectType({
    name: "senseType",
    fields: () => ({
      entry: { type: GraphQLID },
      pos: { type: GraphQLString },
      lang: { type: GraphQLString },
      gloss: { type: GraphQLString },
      info: { type: GraphQLString },
      xref: { type: GraphQLString }
    }),
  });
  
  export default senseType;
  