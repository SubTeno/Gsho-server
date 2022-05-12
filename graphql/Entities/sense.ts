import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import entry from "./entry";
@Entity()
export class sense {
  @PrimaryColumn()
  entry: number;

  @Column()
  pos: string;

  @Column()
  lang: string;

  @PrimaryColumn()
  gloss: string;

  @Column()
  info: number;

  @Column()
  xref: number;

  @ManyToOne(() => entry, (entry) => entry.sense)
  @JoinColumn({
    name: "entry",
  })
  entry_o: entry;
}
