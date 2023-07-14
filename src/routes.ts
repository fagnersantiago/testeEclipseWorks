import { Router, Request, Response, NextFunction } from "express";
import CreateOfferController from "./modules/Offer/create/CreateOfferController";
import { ListOfferController } from "./modules/Offer/list/listOfferController";
import { DeleteOfferController } from "./modules/Offer/delete/deleteOfferController";

const createOfferController = new CreateOfferController();
const listOfferController = new ListOfferController();
const deleteOfferController = new DeleteOfferController();
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

router.delete(
  "/:id/:userId",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      await deleteOfferController.handle(request, response);
    } catch (error) {
      next(error);
    }
  }
);
export { router };
