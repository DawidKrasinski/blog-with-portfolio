import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedViewsColumn1769501763102 implements MigrationInterface {
    name = 'AddedViewsColumn1769501763102'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`views\` int NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`views\``);
    }

}
