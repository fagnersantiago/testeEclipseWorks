import { datasource } from "../../shared/database";
import Offer from "../entities/Offer";
import Wallet from "../../../entities/Wallet";
import User from "../../../entities/User";
import { Repository, W } from "typeorm";
import { ICreateOfferDTO } from "../dto/ICreateOfferDto";

import { IOfferRepository } from "./IOffer";
import { AppError } from "../../shared/appError/appError";

class OfferRepository implements IOfferRepository {
  private offerRepository: Repository<Offer>;
  private walletRepository: Repository<Wallet>;
  private userRepsoitorty: Repository<User>;
  constructor() {
    this.offerRepository = datasource.getRepository(Offer);
    this.walletRepository = datasource.getRepository(Wallet);
    this.userRepsoitorty = datasource.getRepository(User);
  }

  async create({
    price,
    quantity,
    userId,
    coin,
    walletId,
    createdAt,
  }: ICreateOfferDTO): Promise<Offer> {
    const user = await this.userRepsoitorty.findOne({ where: { id: userId } });

    const wallet = await this.walletRepository.findOne({
      where: { id: walletId },
    });

    const offerCreated = this.offerRepository.create({
      price,
      quantity,
      userId: user,
      coin,
      walletId: wallet,
      createdAt,
    });

    await this.offerRepository.save(offerCreated);

    return offerCreated;
  }

  async findBalance(walletId: string, userId: number): Promise<Wallet[]> {
    const walletBalance = await this.walletRepository.find({
      where: { id: walletId, userId: { id: userId } },
    });

    return walletBalance;
  }

  async findOfferPerDay(quantity: number): Promise<Offer> {
    return await this.offerRepository.findOne({ where: { quantity } });
  }
}

export default OfferRepository;
