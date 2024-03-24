import {MigrationInterface, QueryRunner} from "typeorm";

export class new1711269567991 implements MigrationInterface {
    name = 'new1711269567991'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "consumer" ADD "lane1" character varying`);
        await queryRunner.query(`ALTER TABLE "consumer" ADD "lane2" character varying`);
        await queryRunner.query(`ALTER TABLE "consumer" ADD "upozila" character varying`);
        await queryRunner.query(`ALTER TABLE "consumer" ADD "district" character varying`);
        await queryRunner.query(`ALTER TABLE "consumer" ADD "division" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "consumer" DROP COLUMN "division"`);
        await queryRunner.query(`ALTER TABLE "consumer" DROP COLUMN "district"`);
        await queryRunner.query(`ALTER TABLE "consumer" DROP COLUMN "upozila"`);
        await queryRunner.query(`ALTER TABLE "consumer" DROP COLUMN "lane2"`);
        await queryRunner.query(`ALTER TABLE "consumer" DROP COLUMN "lane1"`);
    }

}
