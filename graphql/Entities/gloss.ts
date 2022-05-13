import { Entity, ManyToOne, PrimaryColumn, JoinColumn, Index } from "typeorm";
import { sense } from "./sense";
@Entity()
export class gloss {
  @Index()
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
