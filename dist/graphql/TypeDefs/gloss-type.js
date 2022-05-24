"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const glossType = new graphql_1.GraphQLObjectType({
    name: "glossType",
    fields: () => ({
        sID: { type: graphql_1.GraphQLID },
        gloss: { type: graphql_1.GraphQLString },
    }),
});
exports.default = glossType;
