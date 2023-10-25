import { MigrationInterface, QueryRunner } from 'typeorm';

export class TypeService1698272327738 implements MigrationInterface {
  name = 'TypeService1698272327738';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "das"."product" DROP CONSTRAINT "FK_d71ac3a30622a475df871b55130"`,
    );
    await queryRunner.query(`CREATE TABLE "das"."type_service"
                                 (
                                     "id"   SERIAL NOT NULL,
                                     "name" character varying,
                                     CONSTRAINT "PK_3d5d41ad1d5edfbdc95e36ed7b3" PRIMARY KEY ("id")
                                 )`);
    await queryRunner.query(
      `ALTER TABLE "das"."product" DROP COLUMN "category"`,
    );
    await queryRunner.query(`ALTER TABLE "das"."product" DROP COLUMN "status"`);
    await queryRunner.query(`ALTER TABLE "das"."product"
            ADD "active" boolean NOT NULL DEFAULT true`);
    await queryRunner.query(`ALTER TABLE "das"."product"
            ADD "type_service_id" integer`);
    await queryRunner.query(`ALTER TABLE "das"."product"
            ADD CONSTRAINT "FK_bfe367007fe6c8b5424249d5876" FOREIGN KEY ("type_service_id") REFERENCES "das"."type_service" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "das"."product" DROP CONSTRAINT "FK_bfe367007fe6c8b5424249d5876"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."product" DROP COLUMN "type_service_id"`,
    );
    await queryRunner.query(`ALTER TABLE "das"."product" DROP COLUMN "active"`);
    await queryRunner.query(`ALTER TABLE "das"."product"
            ADD "status" integer NOT NULL DEFAULT '1'`);
    await queryRunner.query(`ALTER TABLE "das"."product"
            ADD "category" integer NOT NULL`);
    await queryRunner.query(`DROP TABLE "das"."type_service"`);
    await queryRunner.query(`ALTER TABLE "das"."product"
            ADD CONSTRAINT "FK_d71ac3a30622a475df871b55130" FOREIGN KEY ("category") REFERENCES "das"."category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }
}
