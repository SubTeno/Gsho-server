"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const entry_1 = __importDefault(require("./../Entities/entry"));
const graphql_1 = require("graphql");
const entry_type_1 = __importDefault(require("./../TypeDefs/entry-type"));
const typeorm_1 = require("typeorm");
const wanakana = __importStar(require("wanakana"));
const entry = {
    type: new graphql_1.GraphQLList(entry_type_1.default),
    args: {
        query: { type: graphql_1.GraphQLString },
        limit: { type: graphql_1.GraphQLInt },
        skip: { type: graphql_1.GraphQLInt },
    },
    // SEARCH ENGINE
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { query, limit, skip } = args;
            var katakana, kanji, eng_like, eng, hiragana;
            var test = wanakana.toHiragana(query);
            // VALIDATIONS
            // THIS IS JAPANESE
            if (wanakana.isJapanese(test)) {
                if (wanakana.isKana(test)) {
                    //  THIS IS KANA
                    hiragana = (0, typeorm_1.Like)(`${test}%`);
                    katakana = (0, typeorm_1.Like)(`${wanakana.toKatakana(query)}%`);
                }
                else {
                    // THIS KANJI
                    kanji = query;
                }
            }
            else {
                // THIS IS ENGLISH
                eng = query;
                eng_like = (0, typeorm_1.Like)(`${query} %`);
            }
            // QUERY MAKING
            var res = yield entry_1.default.find({
                where: [
                    Object.assign({ reading: Object.assign({ elem: hiragana }) }),
                    Object.assign({ reading: Object.assign({ elem: katakana }) }),
                    Object.assign({ sense: Object.assign({ gloss_o: Object.assign({ gloss: eng }) }) }),
                    Object.assign({ sense: Object.assign({ gloss_o: Object.assign({ gloss: eng_like }) }) }),
                    Object.assign({ kanji: Object.assign({ elem: kanji }) }),
                ],
                order: {
                    rank: "ASC",
                },
                cache: true,
                skip: skip,
                take: limit,
                relations: ["kanji", "kanji_code", "reading", "sense", "sense.gloss_o"],
            });
            // LAST ATTEMPT FOR EMPTY SEARCH
            if (!res[0]) {
                eng = query;
                eng_like = (0, typeorm_1.Like)(`${query} %`);
                res = yield entry_1.default.find({
                    where: [
                        { sense: { gloss_o: { gloss: eng } } },
                        { sense: { gloss_o: { gloss: eng_like } } },
                    ],
                    order: {
                        rank: "ASC",
                    },
                    cache: true,
                    skip: skip,
                    take: limit,
                    relations: ["kanji", "kanji_code", "reading", "sense", "sense.gloss_o"],
                });
            }
            // RETURN
            return res;
        });
    },
};
exports.default = entry;
