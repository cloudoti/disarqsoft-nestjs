import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeClientTable1700345973422 implements MigrationInterface {
  name = 'ChangeClientTable1700345973422';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "das"."client"
                ALTER COLUMN "name" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."client"
                ALTER COLUMN "father_last_name" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."client"
                ALTER COLUMN "mother_last_name" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "das"."client"
                ALTER COLUMN "mother_last_name" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."client"
                ALTER COLUMN "father_last_name" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "das"."client"
                ALTER COLUMN "name" SET NOT NULL`,
    );
  }
}
