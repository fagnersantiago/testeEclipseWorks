import { inject, injectable } from "tsyringe";
import { IOfferRepository } from "../repositories/IOffer";
import { ICreateOfferDTO } from "../dto/ICreateOfferDto";
import Offer from "../entities/Offer";

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
      const hasBalance = await this.offerRepository.CheckalletBalance(
        walletId,
        userId
      );

      if (hasBalance && hasBalance[0].balance <= 0) {
        throw new AppError("You have not balance in wallet");
      }

      const offerPerDay = await this.offerRepository.checkDailyOfferLimit(
        offerQuantity
      );

      const offer = await this.offerRepository.create({
        price,
        offerQuantity: offerPerDay.offerQuantity,
        userId,
        coin,
        walletId,
        createdAt,
      });

      return offer;
    } catch (error) {
      console.log(error);
      throw new AppError(error);
    }
  }
}

export { CreateOfferUsecase };
