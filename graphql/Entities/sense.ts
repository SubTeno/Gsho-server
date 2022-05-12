import {
  Entity,
  Column,
  ManyToOne,
  PrimaryColumn,
  JoinColumn,
  OneToMany,
} from "typeorm";
import entry from "./entry";
import { gloss } from "./gloss";
@Entity()
export class sense {
  @PrimaryColumn()
  sID: number;

  @Column()
  entry: number;

  @Column()
  pos: string;

  @Column()
  lang: string;

  @Column()
  info: number;

  @Column()
  xref: number;

  @ManyToOne(() => entry, (entry) => entry.sense)
  @JoinColumn({
    name: "entry",
  })
  entry_o: entry;

  @OneToMany(() => gloss, (gloss) => gloss.sense)
  gloss_o: gloss[];
}
