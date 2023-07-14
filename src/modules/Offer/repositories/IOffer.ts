import { ICreateOfferDTO } from "../dto/ICreateOfferDto";
import Offer from "../entities/Offer";
import Wallet from "../../../entities/Wallet";

interface IOfferRepository {
  create(data: ICreateOfferDTO): Promise<Offer>;
  CheckalletBalance(walletId: string, userId: number): Promise<Wallet[]>;
  checkDailyOfferLimit(offerQuantity: number): Promise<Offer>;
  findAll(page: number, pageSize: number): Promise<Offer[]>;
  delete(id: string, userId: Number): Promise<void>;
  findOfferById(id: string): Promise<Offer>;
}

export { IOfferRepository };
