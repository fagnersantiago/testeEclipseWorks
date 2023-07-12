import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import User from "../entities/User";

export class UserSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const userRepository = dataSource.getRepository(User);

    const userData = [
      {
        id: 1,
        name: "fagner Santiago",
        email: "teste@gmail.com.br",
      },
      {
        id: 2,
        name: "José da Silva",
        email: "jose@gmail.com.br",
      },
      {
        id: 3,
        name: "Maria aparecida",
        email: "maria@gmail.com.br",
      },
      {
        id: 4,
        name: "João da Silva",
        email: "joao@gmail.com.br",
      },
      {
        id: 5,
        name: "John doe",
        email: "john@gmail.com.br",
      },
      {
        id: 6,
        name: "Carlos Almeida",
        email: "carlos@gmail.com.br",
      },
      {
        id: 7,
        name: "André Bonifácio",
        email: "andré@gmail.com.br",
      },
    ];

    const userExists = await userRepository.findOneBy({
      email: userData[0].email,
    });

    if (!userExists) {
      const newUser = userRepository.create(userData);
      await userRepository.save(newUser);
    }
  }
}
