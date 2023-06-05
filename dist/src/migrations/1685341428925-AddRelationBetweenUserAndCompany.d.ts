import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddRelationBetweenUserAndCompany1685341428925 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
