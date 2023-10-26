import { MigrationInterface, QueryRunner } from 'typeorm';

export class PopulateData1698356249935 implements MigrationInterface {
  name = 'PopulateData1698356249935';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO das.role (name) VALUES ('ADMIN');
      INSERT INTO das.role (name) VALUES ('MANAGER');
      INSERT INTO das.role (name) VALUES ('ASISTENT MANAGER');
      INSERT INTO das.role (name) VALUES ('ADVISER');
        `);

    await queryRunner.query(`
      INSERT INTO das."user" (username, password, active, name, father_last_name, mother_last_name, role_id)
      VALUES ('daniel', '123456', true, 'Daniel', 'Ape 1', 'Ape 2', 1);
        `);

    await queryRunner.query(`
      INSERT INTO das.brand (name) VALUES ('TOYOTA');
      INSERT INTO das.brand (name) VALUES ('NISSAN');
      INSERT INTO das.brand (name) VALUES ('SUBARU');
      INSERT INTO das.brand (name) VALUES ('PEUGEOT');
      INSERT INTO das.brand (name) VALUES ('KIA');
      INSERT INTO das.brand (name) VALUES ('HYUNDAI');
      INSERT INTO das.brand (name) VALUES ('JEEP');
      INSERT INTO das.brand (name) VALUES ('BMW');
      INSERT INTO das.brand (name) VALUES ('BMW');
        `);

    await queryRunner.query(`
      INSERT INTO das.type_service (name) VALUES ('MOTOR');
      INSERT INTO das.type_service (name) VALUES ('DIRECCIÓN');
      INSERT INTO das.type_service (name) VALUES ('ELECTRICIDAD');
      INSERT INTO das.type_service (name) VALUES ('ALINEAMIENTO Y BALANCEO');
      INSERT INTO das.type_service (name) VALUES ('ACEITE Y FILTRO');
        `);

    await queryRunner.query(`
      INSERT INTO das.product (name, price, igv, active, type_service_id)
      VALUES ('REVISIÓN DE X 0100', 150.00, 22.88, true, 1);
      INSERT INTO das.product (name, price, igv, active, type_service_id)
      VALUES ('MICROFONO 0102', 45.00, 6.86, true, 3);


      INSERT INTO das.client (type_nie, nie, name, father_last_name, mother_last_name, company_name, phone, email, active)
      VALUES ('DNI', '44000044', 'DANIEL', 'RONCAL', 'MATTOS', 'DOOUS', '', 'dr@gmail.com', true);
        `);

    await queryRunner.query(`
        INSERT INTO das.vehicle (vehicle_registration, model, type, motor, year, active, client_id, brand_id)
        VALUES ('RTX-2025', 'FOSTER', 'Pickup', 'ADFASDF3ASDF', '2023', true, 2, 3);


        INSERT INTO das.quotation (issue_date, total, vehicle_id, client_id, igv)
        VALUES ('2023-10-25 19:21:22.000000', 1500.00, 1, 2, 228.80);
        INSERT INTO das.quotation_detail (quantity, price, total, quotation_id, product_id, igv)
        VALUES (10.00, 150.00, 1500.00, 1, 1, 228.80);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`SELECT 1`);
  }
}
