import entry from "./../Entities/entry";
import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import kanjiType from "./kanji-type";
import kanji_codeType from "./kanji_code-type";
import readingType from "./reading-type";
import senseType from "./sense-type";

const entryType = new GraphQLObjectType({
  name: "entryType",
  fields: () => ({
    seq: { type: GraphQLID },
    jlpt: { type: GraphQLInt },
    rank: { type: GraphQLInt },
    freq: { type: GraphQLString },
    prio: { type: GraphQLInt },
    noun: { type: GraphQLBoolean },
    verb: { type: GraphQLBoolean },
    kanji: {
      type: new GraphQLList(kanjiType),
      resolve(entry: entry) {
        return entry.kanji;
      },
    },
    kanji_code: {
      type: new GraphQLList(kanji_codeType),
      resolve(entry: entry) {
        return entry.kanji_code;
      },
    },
    reading: {
      type: new GraphQLList(readingType),
      resolve(entry: entry) {
        return entry.reading;
      },
    },
    sense: {
      type: new GraphQLList(senseType),
      resolve(entry: entry) {
        return entry.sense;
      },
    },
  }),
});

export default entryType;
