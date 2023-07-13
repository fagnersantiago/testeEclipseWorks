interface ICreateOfferDTO {
  id?: string;
  price: number;
  offerQuantity: number;
  coin: string;
  userId: number;
  walletId: string;
  createdAt: Date;
}

export { ICreateOfferDTO };
