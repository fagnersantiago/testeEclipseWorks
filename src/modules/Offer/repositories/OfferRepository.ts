import { datasource } from "../../shared/database";
import dayjs from "dayjs";
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
    offerQuantity,
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
      offerQuantity,
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

  async findOfferPerDay(offerQuantity: number): Promise<Offer> {
    const offer = await this.offerRepository.findOne({
      where: { offerQuantity },
      order: { offerQuantity: "desc" },
    });

    if (dayjs().diff(offer.createdAt, "day") !== 0 && offer.offerQuantity > 5) {
      throw new AppError("Exceeded maximum offer limit per day ");
    }
    offer.offerQuantity++;

    return offer;
  }
}

export default OfferRepository;
