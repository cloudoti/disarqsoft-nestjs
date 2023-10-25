import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddVehicleClient1697923381694 implements MigrationInterface {
  name = 'AddVehicleClient1697923381694';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "das"."client"
             (
                 "id"               SERIAL            NOT NULL,
                 "type_nie"         character varying NOT NULL,
                 "nie"              character varying NOT NULL,
                 "name"             character varying NOT NULL,
                 "father_last_name" character varying NOT NULL,
                 "mother_last_name" character varying NOT NULL,
                 "company_name"     character varying NOT NULL,
                 "phone"            character varying,
                 "email"            character varying,
                 "active"           boolean           NOT NULL DEFAULT true,
                 CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id")
             )`,
    );
    await queryRunner.query(
      `CREATE TABLE "das"."vehicle"
             (
                 "id"                   SERIAL            NOT NULL,
                 "vehicle_registration" character varying NOT NULL,
                 "model"                character varying NOT NULL,
                 "type"                 character varying NOT NULL,
                 "motor"                character varying NOT NULL,
                 "year"                 character varying NOT NULL,
                 "active"               boolean           NOT NULL DEFAULT true,
                 "client_id"            integer           NOT NULL,
                 CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY ("id")
             )`,
    );
    await queryRunner.query(`ALTER TABLE "das"."product" DROP COLUMN "code"`);
    await queryRunner.query(
      `ALTER TABLE "das"."product" DROP COLUMN "description"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."product" DROP COLUMN "observation"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."user"
                ALTER COLUMN "name" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."user"
                ALTER COLUMN "father_last_name" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."user"
                ALTER COLUMN "mother_last_name" SET NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "das"."product" DROP COLUMN "status"`);
    await queryRunner.query(
      `ALTER TABLE "das"."product"
                ADD "status" integer NOT NULL DEFAULT '1'`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."vehicle"
                ADD CONSTRAINT "FK_c23a177d7fec265e8ca41f4edb0" FOREIGN KEY ("client_id") REFERENCES "das"."client" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "das"."vehicle" DROP CONSTRAINT "FK_c23a177d7fec265e8ca41f4edb0"`,
    );
    await queryRunner.query(`ALTER TABLE "das"."product" DROP COLUMN "status"`);
    await queryRunner.query(
      `ALTER TABLE "das"."product"
                ADD "status" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."user"
                ALTER COLUMN "mother_last_name" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."user"
                ALTER COLUMN "father_last_name" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."user"
                ALTER COLUMN "name" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."product"
                ADD "observation" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."product"
                ADD "description" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."product"
                ADD "code" character varying NOT NULL`,
    );
    await queryRunner.query(`DROP TABLE "das"."vehicle"`);
    await queryRunner.query(`DROP TABLE "das"."client"`);
  }
}
