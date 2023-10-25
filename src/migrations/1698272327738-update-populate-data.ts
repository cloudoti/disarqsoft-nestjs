import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdatePopulateData1698272327738 implements MigrationInterface {
  name = 'UpdatePopulateData1698272327738';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO das.type_service (name)
            VALUES ('MOTOR');
            INSERT INTO das.type_service (name)
            VALUES ('DIRECCIÓN');
            INSERT INTO das.type_service (name)
            VALUES ('ELECTRICIDAD');
            INSERT INTO das.type_service (name)
            VALUES ('ALINEAMIENTO Y BALANCEO');
            INSERT INTO das.type_service (name)
            VALUES ('ACEITE Y FILTRO');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //
  }
}
