import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1697591479328 implements MigrationInterface {
  name = 'Init1697591479328';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS "das"`);
    await queryRunner.query(
      `CREATE TABLE "das"."category"
             (
                 "id"   SERIAL NOT NULL,
                 "name" character varying,
                 CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id")
             )`,
    );
    await queryRunner.query(
      `CREATE TABLE "das"."user"
             (
                 "id"       SERIAL  NOT NULL,
                 "username" character varying,
                 "password" character varying,
                 "active"   boolean NOT NULL DEFAULT true,
                 CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
             )`,
    );
    await queryRunner.query(
      `CREATE TABLE "das"."employee"
             (
                 "id"         SERIAL            NOT NULL,
                 "nie"        character varying NOT NULL,
                 "first_name" character varying NOT NULL,
                 "last_name"  character varying NOT NULL,
                 "active"     boolean           NOT NULL DEFAULT true,
                 "user_id"    integer           NOT NULL,
                 CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id")
             )`,
    );
    await queryRunner.query(
      `CREATE TABLE "das"."order"
             (
                 "id"             SERIAL            NOT NULL,
                 "issue_date"     TIMESTAMP         NOT NULL,
                 "payment_method" character varying NOT NULL,
                 "total_delivery" integer           NOT NULL,
                 "total"          integer           NOT NULL,
                 "user_id"        integer           NOT NULL,
                 CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id")
             )`,
    );
    await queryRunner.query(
      `CREATE TABLE "das"."product"
             (
                 "id"          SERIAL            NOT NULL,
                 "code"        character varying NOT NULL,
                 "name"        character varying NOT NULL,
                 "description" character varying,
                 "observation" character varying,
                 "price"       integer           NOT NULL,
                 "status"      character varying NOT NULL,
                 "category"    integer           NOT NULL,
                 CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id")
             )`,
    );
    await queryRunner.query(
      `CREATE TABLE "das"."order_detail"
             (
                 "id"         SERIAL  NOT NULL,
                 "quantity"   integer NOT NULL,
                 "pu"         integer NOT NULL,
                 "total"      integer NOT NULL,
                 "order_id"   integer NOT NULL,
                 "product_id" integer NOT NULL,
                 CONSTRAINT "PK_0afbab1fa98e2fb0be8e74f6b38" PRIMARY KEY ("id")
             )`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."employee"
                ADD CONSTRAINT "FK_f61258e58ed35475ce1dba03797" FOREIGN KEY ("user_id") REFERENCES "das"."user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."order"
                ADD CONSTRAINT "FK_199e32a02ddc0f47cd93181d8fd" FOREIGN KEY ("user_id") REFERENCES "das"."user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."product"
                ADD CONSTRAINT "FK_d71ac3a30622a475df871b55130" FOREIGN KEY ("category") REFERENCES "das"."category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."order_detail"
                ADD CONSTRAINT "FK_a6ac5c99b8c02bd4ee53d3785be" FOREIGN KEY ("order_id") REFERENCES "das"."order" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."order_detail"
                ADD CONSTRAINT "FK_985d5f728e1eebe4a3eabc43aac" FOREIGN KEY ("product_id") REFERENCES "das"."product" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "das"."order_detail" DROP CONSTRAINT "FK_985d5f728e1eebe4a3eabc43aac"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."order_detail" DROP CONSTRAINT "FK_a6ac5c99b8c02bd4ee53d3785be"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."product" DROP CONSTRAINT "FK_d71ac3a30622a475df871b55130"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."order" DROP CONSTRAINT "FK_199e32a02ddc0f47cd93181d8fd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."employee" DROP CONSTRAINT "FK_f61258e58ed35475ce1dba03797"`,
    );
    await queryRunner.query(`DROP TABLE "das"."order_detail"`);
    await queryRunner.query(`DROP TABLE "das"."product"`);
    await queryRunner.query(`DROP TABLE "das"."order"`);
    await queryRunner.query(`DROP TABLE "das"."employee"`);
    await queryRunner.query(`DROP TABLE "das"."user"`);
    await queryRunner.query(`DROP TABLE "das"."category"`);
  }
}
