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
      const deleted = await this.offerRepository.delete(id, userId);
      return deleted;
    } catch (error) {
      throw new AppError(error);
    }
  }
}

export { DaleteOfferUseCase };
