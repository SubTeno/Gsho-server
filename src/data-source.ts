import { gloss } from './graphql/Entities/gloss';
import { sense } from './graphql/Entities/sense';
import { reading } from './graphql/Entities/reading';
import { kanji_code } from './graphql/Entities/kanji_code';
import { kanji } from './graphql/Entities/kanji';
import { DataSource } from "typeorm";
import entry from './graphql/Entities/entry';

// Data Source
export const AppDataSource = new DataSource({
  type: "better-sqlite3",
  database: "./jmdict.sqlite3",
  synchronize: false,
  logging: false,
  cache:true,
  entities: [kanji,kanji_code,reading,sense,entry,gloss],
  relationLoadStrategy:"query"
});
