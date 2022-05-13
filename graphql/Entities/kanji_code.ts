import entry from "./entry";
import { Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
@Entity()
export class kanji_code {
  @PrimaryColumn()
  entry: number;

  @Index()
  @PrimaryColumn()
  code: number;

  @ManyToOne(() => entry, (entry) => entry.kanji_code)
  @JoinColumn({
    name: "entry",
  })
  entry_o: entry;
}
