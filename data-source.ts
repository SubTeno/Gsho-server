import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "better-sqlite3",
  database: "./jmdict.sqlite3",
  synchronize: false,
  logging: false,
  cache:true,
  entities: ["./graphql/Entities/*"],
});
