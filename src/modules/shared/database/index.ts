import { DataSource, DataSourceOptions } from "typeorm";
import { configDotenv } from "dotenv";
import User from "../../../entities/User";
import Wallet from "../../../entities/Wallet";
import { MainSeed } from "../typeorm/seeds/Main";
import { User1689101175766 } from "../typeorm/migrations/1689101175766-user";
import { Wallet1689103270187 } from "../typeorm/migrations/1689103270187-wallet";
import { Offer1689186171150 } from "../../Offer/migrations/1689186171150-offer";
import { SeederOptions } from "typeorm-extension";
import Offer from "../../Offer/entities/Offer";

configDotenv();

const options: DataSourceOptions & SeederOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_HOST),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  migrations: [User1689101175766, Wallet1689103270187, Offer1689186171150],
  entities: [User, Wallet, Offer],
  seeds: [MainSeed],
};

export const datasource = new DataSource(options);
