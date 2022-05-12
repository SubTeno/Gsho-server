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
  },
  async resolve(parent: any, args: any) {
    var hiragana, katakana;
    if (!wanakana.isKana(args.query)) {
      hiragana = wanakana.toHiragana(args.query);
      katakana = wanakana.toKatakana(args.query);
    }

    var res = await entrie.find({
      where: [
        { reading: { elem: Like(`%${hiragana}%`) } },
        { reading: { elem: Like(`%${katakana}%`) } },
        { sense: { gloss: Like(`%${args.query}%`) } },
      ],
      order: {
        prio: "DESC",
      },
      take: args.limit,
      relations: ["kanji", "kanji_code", "reading", "sense"],
    });
    return res;
  },
};

export default entry;
