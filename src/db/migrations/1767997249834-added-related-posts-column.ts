import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedRelatedPostsColumn1767997249834 implements MigrationInterface {
    name = 'AddedRelatedPostsColumn1767997249834'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`related_posts\` (\`post_id\` int NOT NULL, \`related_post_id\` int NOT NULL, INDEX \`IDX_91eeeb02213f66c0f2b452b937\` (\`post_id\`), INDEX \`IDX_43bfdab798f895027b5db8285c\` (\`related_post_id\`), PRIMARY KEY (\`post_id\`, \`related_post_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`summaryTitle\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`related_posts\` ADD CONSTRAINT \`FK_91eeeb02213f66c0f2b452b937f\` FOREIGN KEY (\`post_id\`) REFERENCES \`posts\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`related_posts\` ADD CONSTRAINT \`FK_43bfdab798f895027b5db8285c5\` FOREIGN KEY (\`related_post_id\`) REFERENCES \`posts\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`related_posts\` DROP FOREIGN KEY \`FK_43bfdab798f895027b5db8285c5\``);
        await queryRunner.query(`ALTER TABLE \`related_posts\` DROP FOREIGN KEY \`FK_91eeeb02213f66c0f2b452b937f\``);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`summaryTitle\``);
        await queryRunner.query(`DROP INDEX \`IDX_43bfdab798f895027b5db8285c\` ON \`related_posts\``);
        await queryRunner.query(`DROP INDEX \`IDX_91eeeb02213f66c0f2b452b937\` ON \`related_posts\``);
        await queryRunner.query(`DROP TABLE \`related_posts\``);
    }

}
