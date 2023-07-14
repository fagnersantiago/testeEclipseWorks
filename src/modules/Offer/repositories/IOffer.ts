import { ICreateOfferDTO } from "../dto/ICreateOfferDto";
import Offer from "../entities/Offer";
import Wallet from "../../../entities/Wallet";

interface IOfferRepository {
  create(data: ICreateOfferDTO): Promise<Offer>;
  CheckalletBalance(walletId: string, userId: number): Promise<Wallet[]>;
  checkDailyOfferLimit(offerQuantity: number): Promise<Offer>;
}

export { IOfferRepository };
