import { Request, Response } from "express";
import { ListOfferUseCase } from "./listOfferUseCase";
import { container } from "tsyringe";

class ListOfferController {
  async handle(request: Request, response: Response) {
    const { page, pageSize } = request.query;

    const listAllOfferUseCase = container.resolve(ListOfferUseCase);

    const offers = await listAllOfferUseCase.execute(
      Number(page),
      Number(pageSize)
    );

    return response.status(200).json(offers);
  }
}

export { ListOfferController };
