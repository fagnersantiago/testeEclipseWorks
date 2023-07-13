import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateOfferUsecase } from "./CreateOfferUseCase";
import { AppError } from "../../shared/appError/appError";

class CreateOfferController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { price, quantity, coin, createdAt } = request.body;

      const userId = parseInt(request.params.userId, 10);
      const { walletId } = request.params;

      const createOfferUsecase = container.resolve(CreateOfferUsecase);

      const createOffer = await createOfferUsecase.execute({
        price,
        quantity,
        coin,
        userId,
        walletId,
        createdAt,
      });

      return response.status(201).json(createOffer);
    } catch (error) {
      throw new AppError(error);
    }
  }
}

export default CreateOfferController;
