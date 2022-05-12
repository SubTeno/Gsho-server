import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import entry from "./entry";
@Entity()
export class kanji {
  @PrimaryColumn()
  entry: number;

  @Column()
  elem: string;

  @Column()
  chars: string;

  @Column()
  info: string;

  @Column()
  prio: number;

  @ManyToOne(() => entry, (entry) => entry.kanji)
  @JoinColumn({
    name: "entry",
  })
  entry_o: entry;
}
