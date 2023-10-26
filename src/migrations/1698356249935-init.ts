import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1698356249935 implements MigrationInterface {
  name = 'Init1698356249935';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS "das"`);
    await queryRunner.query(
      `CREATE TABLE "das"."brand"
             (
                 "id"   SERIAL NOT NULL,
                 "name" character varying,
                 CONSTRAINT "PK_a5d20765ddd942eb5de4eee2d7f" PRIMARY KEY ("id")
             )`,
    );
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
      `CREATE TABLE "das"."module"
             (
                 "id"   SERIAL NOT NULL,
                 "name" character varying,
                 CONSTRAINT "PK_0e20d657f968b051e674fbe3117" PRIMARY KEY ("id")
             )`,
    );
    await queryRunner.query(
      `CREATE TABLE "das"."role"
             (
                 "id"   SERIAL NOT NULL,
                 "name" character varying,
                 CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id")
             )`,
    );
    await queryRunner.query(
      `CREATE TABLE "das"."user"
             (
                 "id"               SERIAL            NOT NULL,
                 "name"             character varying NOT NULL,
                 "father_last_name" character varying NOT NULL,
                 "mother_last_name" character varying NOT NULL,
                 "username"         character varying,
                 "password"         character varying,
                 "active"           boolean           NOT NULL DEFAULT true,
                 "role_id"          integer,
                 CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
             )`,
    );
    await queryRunner.query(
      `CREATE TABLE "das"."order"
             (
                 "id"           SERIAL         NOT NULL,
                 "issue_date"   TIMESTAMP      NOT NULL,
                 "total"        numeric(10, 2) NOT NULL,
                 "igv"          numeric(10, 2) NOT NULL,
                 "warrantyDate" TIMESTAMP      NOT NULL,
                 "user_id"      integer        NOT NULL,
                 CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id")
             )`,
    );
    await queryRunner.query(
      `CREATE TABLE "das"."type_service"
             (
                 "id"   SERIAL NOT NULL,
                 "name" character varying,
                 CONSTRAINT "PK_3d5d41ad1d5edfbdc95e36ed7b3" PRIMARY KEY ("id")
             )`,
    );
    await queryRunner.query(
      `CREATE TABLE "das"."product"
             (
                 "id"              SERIAL            NOT NULL,
                 "name"            character varying NOT NULL,
                 "price"           numeric(10, 2)    NOT NULL,
                 "igv"             numeric(10, 2)    NOT NULL,
                 "active"          boolean           NOT NULL DEFAULT true,
                 "type_service_id" integer,
                 CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id")
             )`,
    );
    await queryRunner.query(
      `CREATE TABLE "das"."order_detail"
             (
                 "id"         SERIAL         NOT NULL,
                 "quantity"   numeric(10, 2) NOT NULL,
                 "price"      numeric(10, 2) NOT NULL,
                 "igv"        numeric(10, 2) NOT NULL,
                 "total"      numeric(10, 2) NOT NULL,
                 "order_id"   integer        NOT NULL,
                 "product_id" integer        NOT NULL,
                 CONSTRAINT "PK_0afbab1fa98e2fb0be8e74f6b38" PRIMARY KEY ("id")
             )`,
    );
    await queryRunner.query(
      `CREATE TABLE "das"."menu"
             (
                 "id"          SERIAL            NOT NULL,
                 "name"        character varying,
                 "description" character varying NOT NULL,
                 "active"      boolean           NOT NULL DEFAULT true,
                 "module_id"   integer           NOT NULL,
                 "role_id"     integer           NOT NULL,
                 CONSTRAINT "PK_35b2a8f47d153ff7a41860cceeb" PRIMARY KEY ("id")
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
                 "brand_id"             integer           NOT NULL,
                 "client_id"            integer           NOT NULL,
                 CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY ("id")
             )`,
    );
    await queryRunner.query(
      `CREATE TABLE "das"."quotation"
             (
                 "id"         SERIAL         NOT NULL,
                 "issue_date" TIMESTAMP      NOT NULL,
                 "total"      numeric(10, 2) NOT NULL,
                 "igv"        numeric(10, 2) NOT NULL,
                 "vehicle_id" integer        NOT NULL,
                 "client_id"  integer        NOT NULL,
                 CONSTRAINT "PK_596c572d5858492d10d8cf5383d" PRIMARY KEY ("id")
             )`,
    );
    await queryRunner.query(
      `CREATE TABLE "das"."quotation_detail"
             (
                 "id"           SERIAL         NOT NULL,
                 "quantity"     numeric(10, 2) NOT NULL,
                 "price"        numeric(10, 2) NOT NULL,
                 "igv"          numeric(10, 2) NOT NULL,
                 "total"        numeric(10, 2) NOT NULL,
                 "quotation_id" integer        NOT NULL,
                 "product_id"   integer        NOT NULL,
                 CONSTRAINT "PK_656e472c6a8f94ea38ebc52266e" PRIMARY KEY ("id")
             )`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."user"
                ADD CONSTRAINT "FK_fb2e442d14add3cefbdf33c4561" FOREIGN KEY ("role_id") REFERENCES "das"."role" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."order"
                ADD CONSTRAINT "FK_199e32a02ddc0f47cd93181d8fd" FOREIGN KEY ("user_id") REFERENCES "das"."user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."product"
                ADD CONSTRAINT "FK_bfe367007fe6c8b5424249d5876" FOREIGN KEY ("type_service_id") REFERENCES "das"."type_service" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."order_detail"
                ADD CONSTRAINT "FK_a6ac5c99b8c02bd4ee53d3785be" FOREIGN KEY ("order_id") REFERENCES "das"."order" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."order_detail"
                ADD CONSTRAINT "FK_985d5f728e1eebe4a3eabc43aac" FOREIGN KEY ("product_id") REFERENCES "das"."product" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."menu"
                ADD CONSTRAINT "FK_d68a151a9ee82114c44aa7dee5f" FOREIGN KEY ("module_id") REFERENCES "das"."module" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."menu"
                ADD CONSTRAINT "FK_f1a7ce2e72150aa99d8d7dc948e" FOREIGN KEY ("role_id") REFERENCES "das"."role" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."vehicle"
                ADD CONSTRAINT "FK_ea43c4dbdf99e6608ad7bcf7657" FOREIGN KEY ("brand_id") REFERENCES "das"."brand" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."vehicle"
                ADD CONSTRAINT "FK_c23a177d7fec265e8ca41f4edb0" FOREIGN KEY ("client_id") REFERENCES "das"."client" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."quotation"
                ADD CONSTRAINT "FK_cbd047871676a9e19dc6137d6bb" FOREIGN KEY ("vehicle_id") REFERENCES "das"."vehicle" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."quotation"
                ADD CONSTRAINT "FK_9242efeb9575748abc40f8f304f" FOREIGN KEY ("client_id") REFERENCES "das"."client" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."quotation_detail"
                ADD CONSTRAINT "FK_8e124967a2b166ca5692dd2eaa8" FOREIGN KEY ("quotation_id") REFERENCES "das"."quotation" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."quotation_detail"
                ADD CONSTRAINT "FK_d578e5e8e7e7ee6d249863c8c76" FOREIGN KEY ("product_id") REFERENCES "das"."product" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "das"."quotation_detail" DROP CONSTRAINT "FK_d578e5e8e7e7ee6d249863c8c76"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."quotation_detail" DROP CONSTRAINT "FK_8e124967a2b166ca5692dd2eaa8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."quotation" DROP CONSTRAINT "FK_9242efeb9575748abc40f8f304f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."quotation" DROP CONSTRAINT "FK_cbd047871676a9e19dc6137d6bb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."vehicle" DROP CONSTRAINT "FK_c23a177d7fec265e8ca41f4edb0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."vehicle" DROP CONSTRAINT "FK_ea43c4dbdf99e6608ad7bcf7657"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."menu" DROP CONSTRAINT "FK_f1a7ce2e72150aa99d8d7dc948e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."menu" DROP CONSTRAINT "FK_d68a151a9ee82114c44aa7dee5f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."order_detail" DROP CONSTRAINT "FK_985d5f728e1eebe4a3eabc43aac"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."order_detail" DROP CONSTRAINT "FK_a6ac5c99b8c02bd4ee53d3785be"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."product" DROP CONSTRAINT "FK_bfe367007fe6c8b5424249d5876"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."order" DROP CONSTRAINT "FK_199e32a02ddc0f47cd93181d8fd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."user" DROP CONSTRAINT "FK_fb2e442d14add3cefbdf33c4561"`,
    );
    await queryRunner.query(`DROP TABLE "das"."quotation_detail"`);
    await queryRunner.query(`DROP TABLE "das"."quotation"`);
    await queryRunner.query(`DROP TABLE "das"."vehicle"`);
    await queryRunner.query(`DROP TABLE "das"."menu"`);
    await queryRunner.query(`DROP TABLE "das"."order_detail"`);
    await queryRunner.query(`DROP TABLE "das"."product"`);
    await queryRunner.query(`DROP TABLE "das"."type_service"`);
    await queryRunner.query(`DROP TABLE "das"."order"`);
    await queryRunner.query(`DROP TABLE "das"."user"`);
    await queryRunner.query(`DROP TABLE "das"."role"`);
    await queryRunner.query(`DROP TABLE "das"."module"`);
    await queryRunner.query(`DROP TABLE "das"."client"`);
    await queryRunner.query(`DROP TABLE "das"."brand"`);
  }
}
