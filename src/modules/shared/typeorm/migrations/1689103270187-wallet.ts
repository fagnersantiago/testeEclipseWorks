import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Wallet1689103270187 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "wallet",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "userId",
            type: "numeric",
          },
          {
            name: "walletName",
            type: "varchar",
          },
          {
            name: "coin",
            type: "varchar",
          },
          {
            name: "balance",
            type: "decimal",
          },
        ],
        foreignKeys: [
          {
            name: "FK_User",

            referencedTableName: "user",

            referencedColumnNames: ["id"],

            columnNames: ["userId"],
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
