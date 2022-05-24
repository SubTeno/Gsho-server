"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const readingType = new graphql_1.GraphQLObjectType({
    name: "readingType",
    fields: () => ({
        entry: { type: graphql_1.GraphQLID },
        elem: { type: graphql_1.GraphQLString },
        restr: { type: graphql_1.GraphQLString },
        info: { type: graphql_1.GraphQLString },
        prio: { type: graphql_1.GraphQLInt },
    }),
});
exports.default = readingType;
