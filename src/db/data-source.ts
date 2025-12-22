import "reflect-metadata";
import "dotenv/config";
import { BaseEntity, DataSource } from "typeorm";
import path from "path";
import { Posts } from "./entities/Posts";
import { Blocks } from "./entities/Blocks";
import { Sections } from "./entities/Sections";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "3306"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Posts, Blocks, Sections],
  migrations: [path.join(__dirname, "migrations/*")],
  synchronize: false,
  logging: ["query", "error"],
});

let dataSource: DataSource | undefined;

export const getDataSource = async () => {
  if (!dataSource) {
    dataSource = await AppDataSource.initialize();
    BaseEntity.useDataSource(dataSource);
  }
  return dataSource;
};
