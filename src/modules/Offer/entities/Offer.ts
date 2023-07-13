import { Column, Entity, ManyToOne, JoinColumn, PrimaryColumn } from "typeorm";
import Wallet from "../../../entities/Wallet";
import User from "../../../entities/User";
import { v4 as uuid } from "uuid";

@Entity("offer")
class Offer {
  @PrimaryColumn()
  id: string;

  @Column("decimal")
  price: number;

  @Column()
  offerQuantity: number;

  @Column()
  coin: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: "userId" })
  userId: User;

  @ManyToOne(() => Wallet, (wallet) => wallet.id)
  @JoinColumn({ name: "walletId" })
  walletId: Wallet;

  @Column()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Offer;
