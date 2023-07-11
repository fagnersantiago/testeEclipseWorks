import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import User from "./User";

@Entity("wallet")
class Wallet {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: "userId" })
  userId: User;

  @Column()
  WalletName: string;

  constructor(userId: any, WalletName: string) {
    this.userId = userId;
    this.WalletName = WalletName;
  }
}

export default Wallet;
