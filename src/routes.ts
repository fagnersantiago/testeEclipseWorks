import { Router, Request, Response, NextFunction } from "express";
import CreateOfferController from "./modules/Offer/create/CreateOfferController";
import { ListOfferController } from "./modules/Offer/list/listOfferController";

const createOfferController = new CreateOfferController();
const listOfferController = new ListOfferController();

const router = Router();
router.post(
  "/create-offer/:userId/:walletId",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      await createOfferController.handle(request, response);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      await listOfferController.handle(request, response);
    } catch (error) {
      next(error);
    }
  }
);

export { router };
