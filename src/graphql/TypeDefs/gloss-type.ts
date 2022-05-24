import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

const glossType = new GraphQLObjectType({
  name: "glossType",
  fields: () => ({
    sID: { type: GraphQLID },
    gloss: { type: GraphQLString },
  }),
});

export default glossType;
