"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Hello ✋
//
// Welcome to the server side of Gsho💙
//
// This Application Uses Express, jmdict's db, better-sqlite3, TypeORM, GraphQL.JS, AND MUCH MORE!!! 🎆
// Theres not much comment to help understand the application, sorry.. 🤣
//
// 🤝Inspired by Lorenzi's jisho
// 💝Created by SubTeno💝
const data_source_1 = require("./data-source");
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const graphql_1 = require("graphql");
const cors_1 = __importDefault(require("cors"));
const get_1 = __importDefault(require("./graphql/Queries/get"));
// GRAPHQL
const query = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        entry: get_1.default,
    },
});
var schema = new graphql_1.GraphQLSchema({
    query: query,
});
//
// INITIALIZING EXPRESS
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    // EXPRESS SERVER
    const app = (0, express_1.default)();
    const PORT = process.env.PORT || 3001;
    // CORS
    app.use((0, cors_1.default)());
    // JSON
    app.use(express_1.default.json());
    // GRAPHQL
    app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
        schema: schema,
        graphiql: true,
    }));
    // HANDLING UNHANDLED ROUTES
    app.get("*", (_req, res) => {
        res.status(404).send("Get out....");
    });
    // INITALIZING DB
    console.log(data_source_1.AppDataSource.entityMetadatas);
    yield data_source_1.AppDataSource.initialize()
        .then(() => console.log("DB INITIALIZED"))
        .catch((e) => console.log(e));
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
});
//
// Execute server
main().catch((err) => {
    console.log(err);
});
