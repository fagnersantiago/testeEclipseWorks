import { Column, Entity, ManyToOne, JoinColumn, PrimaryColumn } from "typeorm";
import User from "./User";
import { v4 as uuid } from "uuid";

@Entity("wallet")
class Wallet {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: "userId" })
  userId: User;

  @Column()
  walletName: string;

  @Column()
  coin: string;

  @Column("decimal")
  balance: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Wallet;
