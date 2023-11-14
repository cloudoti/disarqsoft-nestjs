import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddVehicleClientOrder1699498377209 implements MigrationInterface {
  name = 'AddVehicleClientOrder1699498377209';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "das"."order"
            ADD "vehicle_id" integer NOT NULL`);
    await queryRunner.query(`ALTER TABLE "das"."order"
            ADD "client_id" integer NOT NULL`);
    await queryRunner.query(`ALTER TABLE "das"."order"
            ADD CONSTRAINT "FK_74ef9e828c4d521e413a5230682" FOREIGN KEY ("vehicle_id") REFERENCES "das"."vehicle" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "das"."order"
            ADD CONSTRAINT "FK_a0d9cbb7f4a017bac3198dd8ca0" FOREIGN KEY ("client_id") REFERENCES "das"."client" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "das"."order" DROP CONSTRAINT "FK_a0d9cbb7f4a017bac3198dd8ca0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."order" DROP CONSTRAINT "FK_74ef9e828c4d521e413a5230682"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."order" DROP COLUMN "client_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."order" DROP COLUMN "vehicle_id"`,
    );
  }
}
