import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import Wallet from "../entities/Wallet";
import User from "../entities/User";
import { v4 as uuid } from "uuid";

export class WalletSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const walletRepository = dataSource.getRepository(Wallet);
    const userRepository = dataSource.getRepository(User);

    const walletData = [
      {
        id: uuid(),
        userId: 1,
        walletName: "wallet one",
        coin: "Bitcoin",
        balance: 100.0,
      },
      {
        id: uuid(),
        userId: 2,
        walletName: "wallet two",
        coin: "Ethereum",
        balance: 1200.0,
      },
      {
        id: uuid(),
        userId: 3,
        walletName: "wallet three",
        coin: "Binance coin",
        balance: 300.0,
      },
      {
        id: uuid(),
        userId: 4,
        walletName: "wallet for",
        coin: "Cardano",
        balance: 200.0,
      },
      {
        id: uuid(),

        userId: 5,
        walletName: "wallet five",
        coin: "Tether",
        balance: 500.0,
      },
      {
        id: uuid(),

        userId: 6,
        walletName: "wallet six",
        coin: "XRP",
        balance: 0.0,
      },
      {
        id: uuid(),

        userId: 7,
        walletName: "wallet seven",
        coin: "BITUSD COIN",
        balance: 1000.0,
      },
    ];

    const users = await userRepository.find();

    const createWallets = walletData.map((wallet) => {
      const user = users.find((find) => find.id === wallet.userId);
      if (user) {
        return {
          ...wallet,
          userId: user,
        };
      }
    });

    await walletRepository.save(createWallets);
  }
}
