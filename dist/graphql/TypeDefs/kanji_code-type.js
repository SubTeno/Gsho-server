"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const kanji_codeType = new graphql_1.GraphQLObjectType({
    name: "kanji_codeType",
    fields: () => ({
        entry: { type: graphql_1.GraphQLID },
        code: { type: graphql_1.GraphQLInt },
    }),
});
exports.default = kanji_codeType;
