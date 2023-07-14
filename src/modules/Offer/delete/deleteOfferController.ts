import { Request, Response } from "express";
import { container } from "tsyringe";
import { DaleteOfferUseCase } from "./deleteOfferUse.case";

class DeleteOfferController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, userId } = request.params;
    console.log(id);

    const deleteOfferUseCase = container.resolve(DaleteOfferUseCase);

    await deleteOfferUseCase.execute(id, Number(userId));

    return response.status(201).send({ message: "offer was deleted!" });
  }
}

export { DeleteOfferController };
