import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import Offer from "../entities/Offer";
import { IOfferRepository } from "../repositories/IOffer";
import { AppError } from "../../shared/appError/appError";

@injectable()
class DaleteOfferUseCase {
  constructor(
    @inject("deleteOffer")
    private offerRepository: IOfferRepository
  ) {}

  async execute(id: string, userId: number): Promise<void> {
    try {
      const offeExists = await this.offerRepository.findOfferById(id);
      if (!offeExists) {
        throw new AppError("Offer not found");
      }
      const deleted = await this.offerRepository.delete(
        offeExists.id,
        Number(userId)
      );

      return deleted;
    } catch (error) {
      throw new AppError(error);
    }
  }
}

export { DaleteOfferUseCase };
