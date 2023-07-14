import { inject, injectable } from "tsyringe";
import { IOfferRepository } from "../repositories/IOffer";
import Offer from "../entities/Offer";
import dayjs from "dayjs";

@injectable()
class ListOfferUseCase {
  constructor(
    @inject("offerRepository")
    private offerRepository: IOfferRepository
  ) {}
  async execute(page: number, pageSize: number): Promise<Offer[]> {
    return await this.offerRepository.findAll(page, pageSize);
  }
}
export { ListOfferUseCase };
