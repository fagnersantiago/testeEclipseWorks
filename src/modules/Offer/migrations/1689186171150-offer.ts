import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Offer1689186171150 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "offer",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "price",
            type: "decimal",
          },
          {
            name: "offerQuantity",
            type: "numeric",
          },
          {
            name: "userId",
            type: "numeric",
          },
          {
            name: "walletId",
            type: "uuid",
          },
          {
            name: "coin",
            type: "varchar",
          },

          {
            name: "createdAt",
            type: "timestamp",
            default: "now ()",
          },
          {
            name: "deletedAt",
            type: "timestamp",
            default: "now ()",
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
          {
            name: "FK_wallet",

            referencedTableName: "wallet",

            referencedColumnNames: ["id"],

            columnNames: ["walletId"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("offer");
  }
}
