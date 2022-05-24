import entrie from "./../Entities/entry";
import { GraphQLList, GraphQLInt, GraphQLString } from "graphql";
import entryType from "../TypeDefs/entry-type";
import { Like } from "typeorm";
import * as wanakana from "wanakana";
const entry = {
  type: new GraphQLList(entryType),
  args: {
    query: { type: GraphQLString! },
    limit: { type: GraphQLInt! },
    skip: { type: GraphQLInt! },
  },
  // SEARCH ENGINE
  async resolve(parent: any, args: any) {
    const { query, limit, skip } = args;
    var katakana, kanji, eng_like, eng, hiragana;
    var test = wanakana.toHiragana(query);

    // VALIDATIONS
    // THIS IS JAPANESE
    if (wanakana.isJapanese(test)) {
      if (wanakana.isKana(test)) {
        //  THIS IS KANA
        hiragana = Like(`${test}%`);
        katakana = Like(`${wanakana.toKatakana(query)}%`);
      } else {
        // THIS KANJI
        kanji = query;
      }
    } else {
      // THIS IS ENGLISH
      eng = query;
      eng_like = Like(`${query} %`);
    }

    // QUERY MAKING
    var res = await entrie.find({
      where: [
        // HIRAGANA
        { ...{ reading: { ...{ elem: hiragana } } } },
        // KATAKANA
        { ...{ reading: { ...{ elem: katakana } } } },
        // ENGLISH
        { ...{ sense: { ...{ gloss_o: { ...{ gloss: eng } } } } } },
        { ...{ sense: { ...{ gloss_o: { ...{ gloss: eng_like } } } } } },
        // KANJI
        { ...{ kanji: { ...{ elem: kanji } } } },
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
      eng_like = Like(`${query} %`);
      res = await entrie.find({
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
  },
};

export default entry;
