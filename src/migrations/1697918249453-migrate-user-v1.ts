import { MigrationInterface, QueryRunner } from 'typeorm';

export class MigrateUserV11697918249453 implements MigrationInterface {
  name = 'MigrateUserV11697918249453';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "das"."role" ("id" SERIAL NOT NULL, "name" character varying, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."user" ADD "name" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."user" ADD "father_last_name" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."user" ADD "mother_last_name" character varying`,
    );
    await queryRunner.query(`ALTER TABLE "das"."user" ADD "role_id" integer`);
    await queryRunner.query(
      `ALTER TABLE "das"."user" ADD CONSTRAINT "FK_fb2e442d14add3cefbdf33c4561" FOREIGN KEY ("role_id") REFERENCES "das"."role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "das"."user" DROP CONSTRAINT "FK_fb2e442d14add3cefbdf33c4561"`,
    );
    await queryRunner.query(`ALTER TABLE "das"."user" DROP COLUMN "role_id"`);
    await queryRunner.query(
      `ALTER TABLE "das"."user" DROP COLUMN "mother_last_name"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."user" DROP COLUMN "father_last_name"`,
    );
    await queryRunner.query(`ALTER TABLE "das"."user" DROP COLUMN "name"`);
    await queryRunner.query(`DROP TABLE "das"."role"`);
  }
}
