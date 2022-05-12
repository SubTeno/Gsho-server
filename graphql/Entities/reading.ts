import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import entry from "./entry";
@Entity()
export class reading {
  @PrimaryColumn()
  entry: number;

  @PrimaryColumn()
  elem: string;

  @Column()
  restr: string;

  @Column()
  info: string;

  @Column()
  prio: number;

  @ManyToOne(() => entry, (entry) => entry.reading)
  @JoinColumn({
    name: "entry",
  })
  entry_o: entry;
}
