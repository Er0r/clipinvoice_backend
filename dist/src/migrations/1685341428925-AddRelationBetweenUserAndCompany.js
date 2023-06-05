"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRelationBetweenUserAndCompany1685341428925 = void 0;
class AddRelationBetweenUserAndCompany1685341428925 {
    constructor() {
        this.name = 'AddRelationBetweenUserAndCompany1685341428925';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "company" TO "companyId"`);
        await queryRunner.query(`CREATE TABLE "companies" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "logo" character varying NOT NULL, "phone_number" character varying NOT NULL, "email" character varying NOT NULL, "address" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "companyId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "companyId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_86586021a26d1180b0968f98502" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_86586021a26d1180b0968f98502"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "companyId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "companyId" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "companies"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "companyId" TO "company"`);
    }
}
exports.AddRelationBetweenUserAndCompany1685341428925 = AddRelationBetweenUserAndCompany1685341428925;
//# sourceMappingURL=1685341428925-AddRelationBetweenUserAndCompany.js.map