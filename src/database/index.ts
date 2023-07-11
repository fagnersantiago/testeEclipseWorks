import { DataSource } from "typeorm";
import { configDotenv } from "dotenv";
import User from "../entities/User";

configDotenv();

export const datasource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_HOST),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  entities: [User],
});
