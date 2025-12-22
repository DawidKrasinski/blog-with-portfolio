import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Sections extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  header: string;

  @Column()
  position: number;

  constructor(header?: string) {
    super();
    this.header = header ?? "";
  }
}
