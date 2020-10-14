import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602677490499 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: "images",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    unsigned: true, //Sempre um numero positivo
                    isPrimary: true, //Chave unica
                    isGenerated: true, //Auto Incremental
                    generationStrategy: "increment"

                },
                {
                    name : "path",
                    type : "varchar"
                },
                {
                    name : "orphanage_id",
                    type : "integer"
                }
            ],
            foreignKeys: [
                {
                    name : "ImageOrphanage",
                    columnNames : [ "orphanage_id" ],
                    referencedTableName : "orphanages",
                    referencedColumnNames : ["id"],
                    onUpdate : "CASCADE",
                    onDelete : "CASCADE"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("images");
    }

}
