import { MigrationInterface, QueryRunner } from "typeorm";

export class DelatedBlocksEntity21767016815869 implements MigrationInterface {
    name = 'DelatedBlocksEntity21767016815869'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sections\` ADD \`type\` enum ('bullet_list', 'section', 'image_block', 'code_block', 'quote') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sections\` ADD \`content\` json NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sections\` DROP COLUMN \`content\``);
        await queryRunner.query(`ALTER TABLE \`sections\` DROP COLUMN \`type\``);
    }

}
