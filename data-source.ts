import { sense } from "./graphql/Entities/sense";
import { reading } from "./graphql/Entities/reading";
import { kanji_code } from "./graphql/Entities/kanji_code";
import entry from "./graphql/Entities/entry";
import { kanji } from "./graphql/Entities/kanji";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "better-sqlite3",
  database: "./jmdict.sqlite3",
  synchronize: false,
  logging: true,
  entities: [entry, kanji, kanji_code, reading, sense],
});
