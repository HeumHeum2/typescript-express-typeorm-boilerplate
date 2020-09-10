import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { Photo } from "./Photo";

@Entity()
export class Author {
  @PrimaryColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(type => Photo, photo => photo.author) // note: we will create author
  photos!: Photo[];
}
