import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedCategoriesEntity1767791228923 implements MigrationInterface {
    name = 'AddedCategoriesEntity1767791228923'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`categories\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`position\` int NOT NULL, \`color\` enum ('cyan', 'purple', 'pink') NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`posts_categories_categories\` (\`postsId\` int NOT NULL, \`categoriesId\` int NOT NULL, INDEX \`IDX_f50a96e3d32263cc97588d91d6\` (\`postsId\`), INDEX \`IDX_bb4ea8658b6d38df2a5f93cd50\` (\`categoriesId\`), PRIMARY KEY (\`postsId\`, \`categoriesId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`posts_categories_categories\` ADD CONSTRAINT \`FK_f50a96e3d32263cc97588d91d6e\` FOREIGN KEY (\`postsId\`) REFERENCES \`posts\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`posts_categories_categories\` ADD CONSTRAINT \`FK_bb4ea8658b6d38df2a5f93cd506\` FOREIGN KEY (\`categoriesId\`) REFERENCES \`categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts_categories_categories\` DROP FOREIGN KEY \`FK_bb4ea8658b6d38df2a5f93cd506\``);
        await queryRunner.query(`ALTER TABLE \`posts_categories_categories\` DROP FOREIGN KEY \`FK_f50a96e3d32263cc97588d91d6e\``);
        await queryRunner.query(`DROP INDEX \`IDX_bb4ea8658b6d38df2a5f93cd50\` ON \`posts_categories_categories\``);
        await queryRunner.query(`DROP INDEX \`IDX_f50a96e3d32263cc97588d91d6\` ON \`posts_categories_categories\``);
        await queryRunner.query(`DROP TABLE \`posts_categories_categories\``);
        await queryRunner.query(`DROP TABLE \`categories\``);
    }

}
