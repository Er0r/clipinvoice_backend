import {MigrationInterface, QueryRunner} from "typeorm";

export class newdatabase1679077612867 implements MigrationInterface {
    name = 'newdatabase1679077612867'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `products` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `price` int NOT NULL, `quantity` int NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `role` varchar(255) NOT NULL, `status` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `invoices` (`id` int NOT NULL AUTO_INCREMENT, `total` int NOT NULL, `slug` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `products` text NOT NULL, `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `products` ADD CONSTRAINT `FK_99d90c2a483d79f3b627fb1d5e9` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `invoices` ADD CONSTRAINT `FK_fcbe490dc37a1abf68f19c5ccb9` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `invoices` DROP FOREIGN KEY `FK_fcbe490dc37a1abf68f19c5ccb9`");
        await queryRunner.query("ALTER TABLE `products` DROP FOREIGN KEY `FK_99d90c2a483d79f3b627fb1d5e9`");
        await queryRunner.query("DROP TABLE `invoices`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `products`");
    }

}