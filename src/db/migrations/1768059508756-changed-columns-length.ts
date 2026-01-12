import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangedColumnsLength1768059508756 implements MigrationInterface {
    name = 'ChangedColumnsLength1768059508756'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`reading_time\``);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`reading_time\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`intro\``);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`intro\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`summary\``);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`summary\` text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`summary\``);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`summary\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`intro\``);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`intro\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`reading_time\``);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`reading_time\` varchar(255) NOT NULL`);
    }

}
