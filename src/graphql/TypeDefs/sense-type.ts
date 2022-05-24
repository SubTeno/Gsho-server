import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import glossType from "./gloss-type";
import { sense } from "../Entities/sense";

const senseType = new GraphQLObjectType({
  name: "senseType",
  fields: () => ({
    entry: { type: GraphQLID },
    pos: { type: GraphQLString },
    lang: { type: GraphQLString },
    xref: { type: GraphQLString },
    sID: { type: GraphQLID },
    info: { type: GraphQLString },
    gloss: {
      type: new GraphQLList(glossType),
      resolve(sense: sense) {
        return sense.gloss_o;
      },
    },
  }),
});

export default senseType;
