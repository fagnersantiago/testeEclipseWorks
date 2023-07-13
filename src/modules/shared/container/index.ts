import "reflect-metadata";
import { container } from "tsyringe";
import { IOfferRepository } from "../../Offer/repositories/IOffer";
import OfferRepository from "../../Offer/repositories/OfferRepository";
// import { IPlaceRepository } from "../../modules/places/repository/IPlacle";
// import PlaceRepository from "../../modules/places/repository/PlaceRepository";

container.registerSingleton<IOfferRepository>(
  "offerRepository",
  OfferRepository
);

// container.registerSingleton<IPlaceRepository>(
//   "PlaceRepository",
//   PlaceRepository
// );

// container.registerSingleton<IPlaceRepository>(
//   "listPlaceRepository",
//   PlaceRepository
// );
