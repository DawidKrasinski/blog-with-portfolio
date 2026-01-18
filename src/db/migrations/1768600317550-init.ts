import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1768600317550 implements MigrationInterface {
    name = 'Init1768600317550'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`post_related_posts\` (\`post_id\` int NOT NULL, \`related_post_id\` int NOT NULL, INDEX \`IDX_8b9f6993c5a74fc7e4c2b4ab85\` (\`post_id\`), INDEX \`IDX_f2713eff60bb2f0a00f6188318\` (\`related_post_id\`), PRIMARY KEY (\`post_id\`, \`related_post_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`post_related_posts\` ADD CONSTRAINT \`FK_8b9f6993c5a74fc7e4c2b4ab859\` FOREIGN KEY (\`post_id\`) REFERENCES \`posts\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`post_related_posts\` ADD CONSTRAINT \`FK_f2713eff60bb2f0a00f61883184\` FOREIGN KEY (\`related_post_id\`) REFERENCES \`posts\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post_related_posts\` DROP FOREIGN KEY \`FK_f2713eff60bb2f0a00f61883184\``);
        await queryRunner.query(`ALTER TABLE \`post_related_posts\` DROP FOREIGN KEY \`FK_8b9f6993c5a74fc7e4c2b4ab859\``);
        await queryRunner.query(`DROP INDEX \`IDX_f2713eff60bb2f0a00f6188318\` ON \`post_related_posts\``);
        await queryRunner.query(`DROP INDEX \`IDX_8b9f6993c5a74fc7e4c2b4ab85\` ON \`post_related_posts\``);
        await queryRunner.query(`DROP TABLE \`post_related_posts\``);
    }

}
