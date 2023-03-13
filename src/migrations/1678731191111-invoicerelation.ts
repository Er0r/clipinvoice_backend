import {MigrationInterface, QueryRunner} from "typeorm";

export class invoicerelation1678731191111 implements MigrationInterface {
    name = 'invoicerelation1678731191111'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `invoices` (`id` int NOT NULL AUTO_INCREMENT, `total` int NOT NULL, `slug` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `products` ADD `invoicesId` int NULL");
        await queryRunner.query("ALTER TABLE `products` ADD CONSTRAINT `FK_d8269387a8d3cd49ac305a44593` FOREIGN KEY (`invoicesId`) REFERENCES `invoices`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `invoices` ADD CONSTRAINT `FK_fcbe490dc37a1abf68f19c5ccb9` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `invoices` DROP FOREIGN KEY `FK_fcbe490dc37a1abf68f19c5ccb9`");
        await queryRunner.query("ALTER TABLE `products` DROP FOREIGN KEY `FK_d8269387a8d3cd49ac305a44593`");
        await queryRunner.query("ALTER TABLE `products` DROP COLUMN `invoicesId`");
        await queryRunner.query("DROP TABLE `invoices`");
    }

}
