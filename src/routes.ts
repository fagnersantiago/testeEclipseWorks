import { Router, Request, Response, NextFunction } from "express";
import CreateOfferController from "./modules/Offer/create/CreateOfferController";

const createOfferController = new CreateOfferController();

const router = Router();
router.post(
  "/create-offer/:userId/:walletId",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      await createOfferController.handle(request, response);
    } catch (error) {
      next(error); // Passa o erro para o próximo middleware de tratamento de erros
    }
  }
);

export { router };
