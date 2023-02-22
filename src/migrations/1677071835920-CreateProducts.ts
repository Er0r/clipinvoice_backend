import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateProducts1677071835920 implements MigrationInterface {
    name = 'CreateProducts1677071835920'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `products` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `price` int NOT NULL, `quantity` int NOT NULL, `createdAt` datetime NOT NULL, `updatedAt` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `products`");
    }

}
