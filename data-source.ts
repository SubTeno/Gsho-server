import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "better-sqlite3",
  database: "./jmdict.sqlite3",
  synchronize: false,
  logging: true,
  cache:true,
  entities: ["./graphql/Entities/*"],
  relationLoadStrategy:"query"
});
