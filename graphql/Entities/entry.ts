import { reading } from "./reading";
import { kanji_code } from "./kanji_code";
import { Entity, Column, BaseEntity, OneToMany, PrimaryColumn } from "typeorm";
import { kanji } from "./kanji";
import { sense } from "./sense";
@Entity()
export default class entry extends BaseEntity {
  @PrimaryColumn()
  seq: number;

  @Column()
  jlpt: number;

  @Column()
  rank: number;

  @Column({
    type: "integer",
  })
  freq: number;

  @Column()
  prio: number;

  @Column()
  noun: boolean;

  @Column()
  verb: boolean;

  @OneToMany(() => kanji_code, (kanji_code) => kanji_code.entry_o)
  kanji_code!: kanji_code[];

  @OneToMany(() => kanji, (kanji) => kanji.entry_o)
  kanji!: kanji[];

  @OneToMany(() => reading, (reading) => reading.entry_o)
  reading!: reading[];

  @OneToMany(() => sense, (sense) => sense.entry_o)
  sense!: sense[];
}
