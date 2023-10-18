import { MigrationInterface, QueryRunner } from 'typeorm';

export class PopulateData1697591479328 implements MigrationInterface {
  name = 'PopulateData1697591479328';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO das."user" (username, password, active)
            VALUES ('daniel', '123456', true);
        `);
    await queryRunner.query(`
            INSERT INTO das.category (name)
            VALUES ('VIDEO');
            INSERT INTO das.category (name)
            VALUES ('AUDIO');
        `);
    await queryRunner.query(`
            INSERT INTO das.product (code, name, description, observation, price, category, status)
            VALUES ('0100', 'CAMARA 0100', '', '', 150.00, 1, 'B');
            INSERT INTO das.product (code, name, description, observation, price, category, status)
            VALUES ('0102', 'MICROFONO 0102', '', '', 45.00, 2, 'B');
        `);
    await queryRunner.query(`
            INSERT INTO das.employee (nie, first_name, last_name, active, user_id)
            VALUES ('44777744', 'DANIEL', 'RONCAL', true, 1);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE
             FROM das.employee
             WHERE id > 0`,
    );
    await queryRunner.query(``);
    await queryRunner.query(
      `DELETE
             FROM das.product
             WHERE id > 0`,
    );
    await queryRunner.query(
      `DELETE
             FROM das.category
             WHERE id > 0`,
    );
    await queryRunner.query(
      `DELETE
             FROM das.user
             WHERE id > 0`,
    );
  }
}
