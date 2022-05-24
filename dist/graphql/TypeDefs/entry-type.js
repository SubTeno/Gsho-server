"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const kanji_type_1 = __importDefault(require("./kanji-type"));
const kanji_code_type_1 = __importDefault(require("./kanji_code-type"));
const reading_type_1 = __importDefault(require("./reading-type"));
const sense_type_1 = __importDefault(require("./sense-type"));
const entryType = new graphql_1.GraphQLObjectType({
    name: "entryType",
    fields: () => ({
        seq: { type: graphql_1.GraphQLID },
        jlpt: { type: graphql_1.GraphQLInt },
        rank: { type: graphql_1.GraphQLInt },
        freq: { type: graphql_1.GraphQLString },
        prio: { type: graphql_1.GraphQLInt },
        noun: { type: graphql_1.GraphQLBoolean },
        verb: { type: graphql_1.GraphQLBoolean },
        kanji: {
            type: new graphql_1.GraphQLList(kanji_type_1.default),
            resolve(entry) {
                return entry.kanji;
            },
        },
        kanji_code: {
            type: new graphql_1.GraphQLList(kanji_code_type_1.default),
            resolve(entry) {
                return entry.kanji_code;
            },
        },
        reading: {
            type: new graphql_1.GraphQLList(reading_type_1.default),
            resolve(entry) {
                return entry.reading;
            },
        },
        sense: {
            type: new graphql_1.GraphQLList(sense_type_1.default),
            resolve(entry) {
                return entry.sense;
            },
        },
    }),
});
exports.default = entryType;
