import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn, Index } from "typeorm";
import entry from "./entry";
@Entity()
export class kanji {
  @Index()
  @PrimaryColumn()
  entry!: number;

  @PrimaryColumn()
  elem!: string;

  @Column()
  chars!: string;

  @Column()
  info!: string;

  @Column()
  prio!: number;

  @ManyToOne(() => entry, (entry) => entry.kanji)
  @JoinColumn({
    name: "entry",
  })
  entry_o!: entry;
}
