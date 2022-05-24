import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

const kanjiType = new GraphQLObjectType({
  name: "kanjiType",
  fields: () => ({
    entry: { type: GraphQLID },
    elem: { type: GraphQLString },
    chars: { type: GraphQLString },
    info: { type: GraphQLString },
    prio: { type: GraphQLInt },
  }),
});

export default kanjiType;
