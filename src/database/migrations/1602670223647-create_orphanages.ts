import {MigrationInterface, QueryRunner , Table} from "typeorm";

export class createOrphanages1602670223647 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: "orphanages",
            columns:[
                {
                    name: "id",
                    type: "integer",
                    unsigned: true, //Sempre um numero positivo
                    isPrimary: true, //Chave unica
                    isGenerated: true, //Auto Incremental
                    generationStrategy: "increment"

                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "latitude",
                    type: "decimal",
                    scale: 10, //Precisão do .0000 float
                    precision: 2
                },
                {
                    name: "longitude",
                    type: "decimal",
                    scale: 10, //Precisão do .0000 float
                    precision: 2
                },
                {
                    name: "about",
                    type: "text"
                },
                {
                    name: "instructions",
                    type: "text"
                },
                {
                    name: "opening_hours",
                    type: "varchar"
                },
                {
                    name: "open_on_weekends",
                    type: "boolean",
                    default: false
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("orphanages")
    }

}
