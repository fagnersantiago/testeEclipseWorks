import { datasource } from "../../shared/database";
import dayjs from "dayjs";
import Offer from "../entities/Offer";
import Wallet from "../../../entities/Wallet";
import User from "../../../entities/User";
import { IsNull, Repository, W } from "typeorm";
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

  async CheckalletBalance(walletId: string, userId: number): Promise<Wallet[]> {
    const walletBalance = await this.walletRepository.find({
      where: { id: walletId, userId: { id: userId } },
    });

    return walletBalance;
  }

  async checkDailyOfferLimit(offerQuantity: number): Promise<Offer> {
    let offer = await this.offerRepository.findOne({
      where: { offerQuantity },
      order: { offerQuantity: "desc" },
    });

    if (!offer) {
      offer = new Offer();
      offer.offerQuantity = 0;
    }

    const today = dayjs().diff(offer.createdAt, "day");

    if (offer && today >= 0 && offer.offerQuantity >= 5) {
      throw new AppError("Exceeded maximum offer limit per day ");
    } else {
      offer.offerQuantity++;
    }
    return offer;
  }

  async findAll(page: number, pageSize: number): Promise<Offer[]> {
    const skip = (page - 1) * pageSize;

    const listAllOffer = await this.offerRepository.find({
      order: {
        createdAt: "DESC",
      },
      skip,
      take: pageSize,
    });

    const currentDate = dayjs();

    const filteredOffers = listAllOffer.filter(
      (offer) =>
        dayjs(offer.createdAt).isSame(currentDate, "day") &&
        offer.deletedAt == null
    );

    return filteredOffers;
  }

  async delete(id: string, userId: number): Promise<void> {
    const deleteOffer = await this.offerRepository.findOne({
      where: { id: id, userId: { id: userId } },
    });

    if (deleteOffer) {
      deleteOffer.deletedAt = new Date();
      await this.offerRepository.save(deleteOffer);
    }
  }
  async findOfferById(id: string) {
    return await this.offerRepository.findOne({ where: { id } });
  }
}

export default OfferRepository;
