import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedBlocksAndSectionsEntity1766425986556 implements MigrationInterface {
    name = 'AddedBlocksAndSectionsEntity1766425986556'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`sections\` (\`id\` int NOT NULL AUTO_INCREMENT, \`header\` varchar(255) NOT NULL, \`position\` int NOT NULL, \`postId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`blocks\` (\`id\` int NOT NULL AUTO_INCREMENT, \`header\` varchar(255) NOT NULL, \`position\` int NOT NULL, \`type\` enum ('bullet_list', 'section', 'image_block', 'code_block', 'quote') NOT NULL, \`content\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`headline\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`subheadline\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`published_date\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`reading_time\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`intro\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`summary\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sections\` ADD CONSTRAINT \`FK_f809ea8ec8d415aa9735fa0826f\` FOREIGN KEY (\`postId\`) REFERENCES \`posts\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sections\` DROP FOREIGN KEY \`FK_f809ea8ec8d415aa9735fa0826f\``);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`summary\``);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`intro\``);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`reading_time\``);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`published_date\``);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`subheadline\``);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`headline\``);
        await queryRunner.query(`DROP TABLE \`blocks\``);
        await queryRunner.query(`DROP TABLE \`sections\``);
    }

}
