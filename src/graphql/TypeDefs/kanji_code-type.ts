import { GraphQLID, GraphQLInt, GraphQLObjectType } from "graphql";

const kanji_codeType = new GraphQLObjectType({
  name: "kanji_codeType",
  fields: () => ({
    entry: { type: GraphQLID },
    code: { type: GraphQLInt },
  }),
});

export default kanji_codeType;
