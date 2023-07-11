import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Wallet1689103270187 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "wallet",
        columns: [
          {
            name: "userId",
            type: "uuid",
          },
          {
            name: "WalletName",
            type: "varchar",
          },
        ],
        foreignKeys: [
          {
            name: "FK_User",

            referencedTableName: "User",

            referencedColumnNames: ["id"],

            columnNames: ["UserId"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("wallet");
  }
}
