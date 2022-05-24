"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const gloss_1 = require("./graphql/Entities/gloss");
const sense_1 = require("./graphql/Entities/sense");
const reading_1 = require("./graphql/Entities/reading");
const kanji_code_1 = require("./graphql/Entities/kanji_code");
const kanji_1 = require("./graphql/Entities/kanji");
const typeorm_1 = require("typeorm");
const entry_1 = __importDefault(require("./graphql/Entities/entry"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "better-sqlite3",
    database: "./jmdict.sqlite3",
    synchronize: false,
    logging: true,
    cache: true,
    entities: [kanji_1.kanji, kanji_code_1.kanji_code, reading_1.reading, sense_1.sense, entry_1.default, gloss_1.gloss],
    relationLoadStrategy: "query"
});
