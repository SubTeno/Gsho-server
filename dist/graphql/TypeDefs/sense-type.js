"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const gloss_type_1 = __importDefault(require("./gloss-type"));
const senseType = new graphql_1.GraphQLObjectType({
    name: "senseType",
    fields: () => ({
        entry: { type: graphql_1.GraphQLID },
        pos: { type: graphql_1.GraphQLString },
        lang: { type: graphql_1.GraphQLString },
        xref: { type: graphql_1.GraphQLString },
        sID: { type: graphql_1.GraphQLID },
        info: { type: graphql_1.GraphQLString },
        gloss: {
            type: new graphql_1.GraphQLList(gloss_type_1.default),
            resolve(sense) {
                return sense.gloss_o;
            },
        },
    }),
});
exports.default = senseType;
