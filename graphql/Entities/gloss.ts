import { Entity, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import { sense } from "./sense";
@Entity()
export class gloss {
  @PrimaryColumn()
  sID: number;

  @PrimaryColumn()
  gloss: string;

  @ManyToOne(() => sense, (sense) => sense.gloss_o)
  @JoinColumn({
    name: "sID",
  })
  sense: sense;
}
