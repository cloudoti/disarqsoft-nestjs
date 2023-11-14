import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPriceOrder1699497317578 implements MigrationInterface {
    name = 'AddPriceOrder1699497317578'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "das"."order" ADD "price" numeric(10,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "das"."order" DROP COLUMN "price"`);
    }

}
