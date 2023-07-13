import { ICreateOfferDTO } from "../dto/ICreateOfferDto";
import Offer from "../entities/Offer";
import Wallet from "../../../entities/Wallet";

interface IOfferRepository {
  create(data: ICreateOfferDTO): Promise<Offer>;
  findBalance(walletId: string, userId: number): Promise<Wallet[]>;
  findOfferPerDay(quantity: number): Promise<Offer>;
}

export { IOfferRepository };
