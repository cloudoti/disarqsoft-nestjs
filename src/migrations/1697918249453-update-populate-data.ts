import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdatePopulateData1697918249453 implements MigrationInterface {
  name = 'UpdatePopulateData1697918249453';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO das.role (name)
            VALUES ('ADMIN');
            INSERT INTO das.role (name)
            VALUES ('MANAGER');
            INSERT INTO das.role (name)
            VALUES ('ASISTENT MANAGER');
            INSERT INTO das.role (name)
            VALUES ('ADVISER');
        `);
    await queryRunner.query(`
            UPDATE das."user"
            SET name='Daniel',
                father_last_name='Ape 1',
                mother_last_name = 'Ape 2',
                role_id = 1
            WHERE id = 1
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //
  }
}
