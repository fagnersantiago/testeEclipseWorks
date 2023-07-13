import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager, runSeeder } from "typeorm-extension";
import { UserSeeder } from "./UsersSeed";
import { WalletSeeder } from "./WalletSeed";

export class MainSeed implements Seeder {
  async run(
    dataSoucer: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    await runSeeder(dataSoucer, UserSeeder);
    await runSeeder(dataSoucer, WalletSeeder);
  }
}
