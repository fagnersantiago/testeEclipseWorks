import { inject, injectable } from "tsyringe";
import { IOfferRepository } from "../repositories/IOffer";
import { ICreateOfferDTO } from "../dto/ICreateOfferDto";
import Offer from "../entities/Offer";
import dayjs from "dayjs";

import { AppError } from "../../shared/appError/appError";

@injectable()
class CreateOfferUsecase {
  constructor(
    @inject("offerRepository")
    private offerRepository: IOfferRepository
  ) {}

  async execute({
    price,
    offerQuantity,
    userId,
    coin,
    walletId,
    createdAt,
  }: ICreateOfferDTO): Promise<Offer> {
    try {
      const balance = await this.offerRepository.findBalance(walletId, userId);

      if (balance && balance[0].balance <= 0) {
        throw new AppError("You have not balance in wallet");
      }

      const offerDay = await this.offerRepository.findOfferPerDay(
        offerQuantity
      );

      if (!offerDay) {
        offerDay.offerQuantity = 1;
      }

      const offer = await this.offerRepository.create({
        price,
        offerQuantity: offerDay.offerQuantity,
        userId,
        coin,
        walletId,
        createdAt,
      });

      return offer;
    } catch (error) {
      throw new AppError(error);
    }
  }
}

export { CreateOfferUsecase };
