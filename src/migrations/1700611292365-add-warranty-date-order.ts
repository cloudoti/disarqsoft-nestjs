import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddWarrantyDateOrder1700611292365 implements MigrationInterface {
  name = 'AddWarrantyDateOrder1700611292365';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "das"."order" RENAME COLUMN "warrantyDate" TO "warranty_date"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "das"."order" RENAME COLUMN "warranty_date" TO "warrantyDate"`,
    );
  }
}
