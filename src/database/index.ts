import { DataSource, DataSourceOptions } from "typeorm";
import { configDotenv } from "dotenv";
import User from "../entities/User";
import Wallet from "../entities/Wallet";
import { MainSeed } from "../seeds/Main";
import { User1689101175766 } from "../migrations/1689101175766-user";
import { Wallet1689103270187 } from "../migrations/1689103270187-wallet";
import { SeederOptions } from "typeorm-extension";

configDotenv();

const options: DataSourceOptions & SeederOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_HOST),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  migrations: [User1689101175766, Wallet1689103270187],
  entities: [User, Wallet],
  seeds: [MainSeed],
};

export const datasource = new DataSource(options);
