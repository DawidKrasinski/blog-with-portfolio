import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedCodeHeaderColumn1770098858001 implements MigrationInterface {
    name = 'AddedCodeHeaderColumn1770098858001'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`code_header\` json NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`code_header\``);
    }

}
