import { MigrationInterface, QueryRunner } from "typeorm";

export class FixedPostsEntity1767997561178 implements MigrationInterface {
    name = 'FixedPostsEntity1767997561178'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`summaryTitle\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`summaryTitle\` varchar(255) NOT NULL`);
    }

}
