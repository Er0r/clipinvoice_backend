"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.new1711269567991 = void 0;
class new1711269567991 {
    constructor() {
        this.name = 'new1711269567991';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "consumer" ADD "lane1" character varying`);
        await queryRunner.query(`ALTER TABLE "consumer" ADD "lane2" character varying`);
        await queryRunner.query(`ALTER TABLE "consumer" ADD "upozila" character varying`);
        await queryRunner.query(`ALTER TABLE "consumer" ADD "district" character varying`);
        await queryRunner.query(`ALTER TABLE "consumer" ADD "division" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "consumer" DROP COLUMN "division"`);
        await queryRunner.query(`ALTER TABLE "consumer" DROP COLUMN "district"`);
        await queryRunner.query(`ALTER TABLE "consumer" DROP COLUMN "upozila"`);
        await queryRunner.query(`ALTER TABLE "consumer" DROP COLUMN "lane2"`);
        await queryRunner.query(`ALTER TABLE "consumer" DROP COLUMN "lane1"`);
    }
}
exports.new1711269567991 = new1711269567991;
//# sourceMappingURL=1711269567991-new.js.map