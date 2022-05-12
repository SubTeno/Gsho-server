import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

const readingType = new GraphQLObjectType({
  name: "readingType",
  fields: () => ({
    entry: { type: GraphQLID },
    elem: { type: GraphQLString },
    restr: { type: GraphQLString },
    info: { type: GraphQLString },
    prio: { type: GraphQLInt },
  }),
});

export default readingType;
